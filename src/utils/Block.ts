import EventBus from './EventBus';

export default class Block {
    static EVENTS = {
        INIT: 'init',
        FLOW_CDM: 'flow:component-did-mount',
        FLOW_CDU: 'flow:component-did-update',
        FLOW_RENDER: 'flow:render'
    };

    _element: HTMLElement | null = null;
    _meta: { tagName: string, props: object } | null = null;
    _props: Record<string, any>;
    _eventBus: () => EventBus;

    constructor(tagName: string = 'div', props: object = {}) {
        const eventBus = new EventBus();

        this._meta = {
            tagName,
            props
        };

        this._props = this._makePropsProxy(props);
        this._eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _addEvents() {
        const { events = {} } = this._props;
        Object.keys(events).forEach((eventName) => {
            this._element?.firstChild?.addEventListener(eventName, events[eventName]);
        });
    }

    _removeEvents() {
        const { events = {} } = this._props;
        Object.keys(events).forEach((eventName) => {
            this._element?.firstChild?.removeEventListener(eventName, events[eventName]);
        });
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    init() {
        this._element = this._createDocumentElement(this._meta!.tagName)
        this._eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
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
        this._render();
    }

    componentDidUpdate() {
        return true;
    }

    setProps(nextProps: Record<string, unknown>) {
        if (!nextProps) {
            return;
        }

        Object.assign(this._props, nextProps);
    }

    get element() {
        return this._element;
    }

    _render() {
        this._removeEvents();
        const block = this.render();
        console.trace()
        this._element!.innerHTML = block;
        this._addEvents();
    }

    render() {
        return '';
    }

    getContent() {
        return this._element;
    }

    _makePropsProxy(props: object) {
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
            }
        });
    }

    _createDocumentElement(tagName: string) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent()!.style.display = 'block';
    }

    hide() {
        this.getContent()!.style.display = 'none';
    }
}
