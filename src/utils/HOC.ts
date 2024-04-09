import Block from './Block';
import store, { StoreEvents } from './Store';
import { Indexed } from './utils';

export function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
  return class extends Component {
    constructor(props: Record<string, unknown>) {
      super({ ...props, ...mapStateToProps(store.getState()) });

      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...mapStateToProps(store.getState()) });
      });
    }
  };
}
