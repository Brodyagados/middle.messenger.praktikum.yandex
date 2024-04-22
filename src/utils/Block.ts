import Handlebars from 'handlebars';
import EventBus from './EventBus';

type TProps = Record<string, any>;

export default class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _id = Math.floor(100000 + Math.random() * 900000).toString();

  _element: HTMLElement | null = null;

  _meta: { tagName: string, props: TProps } | null = null;

  _props: TProps;

  _children: Record<string, Block | Block[]>;

  _eventBus: () => EventBus;

  constructor(propsAndChildren: TProps, tagName: string = 'div') {
    const eventBus = new EventBus();
    const { children, props } = this._getPropsAndChildren(propsAndChildren);
    this._children = children;
    this._meta = { tagName, props };
    this._props = this._makePropsProxy({ id: this._id, ...props });
    this._eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getPropsAndChildren(propsAndChildren: TProps) {
    const children: Record<string, Block | Block[]> = {};
    const props: TProps = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block || (Array.isArray(value) && value.every((item) => item instanceof Block))) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  compile(template: string, props: TProps) {
    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = child instanceof Block
        ? `<div data-id="${child._id}"></div>`
        : child.map((block) => `<div data-id="${block._id}"></div>`).join('');
    });

    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = this._renderTemplate(template, propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const children = child instanceof Block ? [child] : child;
      children.forEach((block) => {
        if (fragment instanceof HTMLTemplateElement) {
          const stub = fragment.content.querySelector(`[data-id="${block._id}"]`);
          const content = block.getContent();

          if (!stub || !content) {
            return;
          }

          stub.replaceWith(content);
        }
      });
    });

    if (fragment instanceof HTMLTemplateElement) {
      return fragment.content;
    }

    return undefined;
  }

  _addAttributes() {
    const { attr = {} } = this._props;
    Object.keys(attr).forEach((attrName) => {
      this._element?.setAttribute(attrName, attr[attrName]);
    });
  }

  _addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this._element = this._createDocumentElement(this._meta!.tagName);
    this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    Object.values(this._children).forEach((child) => {
      if (child instanceof Block) {
        child.dispatchComponentDidMount();
      } else {
        child.forEach((c) => c.dispatchComponentDidMount());
      }
    });
  }

  componentDidMount() { }

  dispatchComponentDidMount() {
    this._eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }

    const { children } = this._getPropsAndChildren(this._props);
    if (this._children.items) {
      this._children.items = children.items;
    }

    this._render();
  }

  componentDidUpdate() {
    return true;
  }

  setProps(nextProps: TProps) {
    if (!nextProps) {
      return;
    }

    Object.assign(this._props, nextProps);
    this._eventBus().emit(Block.EVENTS.FLOW_CDU);
  }

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    if (!this._element || !block) {
      return;
    }

    this._removeEvents();
    this._element.replaceChildren(block);
    this._addEvents();
    this._addAttributes();
  }

  render() {
    const fragment = this._createDocumentElement('template');
    if (fragment instanceof HTMLTemplateElement) {
      return fragment.content;
    }

    return undefined;
  }

  getContent() {
    return this._element;
  }

  _makePropsProxy(props: TProps) {
    return new Proxy(props, {
      get(target: Record<string, unknown>, prop: string) {
        if (prop.indexOf('_') === 0) {
          throw new Error('No access');
        }

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target: Record<string, unknown>, prop: string, value: unknown) {
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('No access');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);

    return element;
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }

  _renderTemplate(template: string, context: object) {
    const hbsTemplate = Handlebars.compile(template);
    return hbsTemplate(context);
  }
}
