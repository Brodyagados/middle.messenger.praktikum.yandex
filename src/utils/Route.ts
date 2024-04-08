import Block from './Block';

export type TView = any;
type TProps = Record<string, string>;

export default class Route {
  _pathname: string;

  _blockClass: TView;

  _block: Block | null;

  _props: TProps;

  constructor(pathname: string, view: TView, props: TProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    this._block = new this._blockClass();
    this._block && render(this._props.rootQuery, this._block);
  }
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root) {
    root.replaceChildren(block.getContent()!);
  }
}
