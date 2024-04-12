import Block from './Block';
import store, { StoreEvents } from './Store';
import { Indexed, isEqual } from './utils';

export function connect(Component: typeof Block, mapStateToProps: (state: Indexed) => Indexed) {
  return class extends Component {
    constructor(props: Record<string, unknown>) {
      let state = mapStateToProps(store.getState());
      super({ ...props, ...state });

      store.on(StoreEvents.Updated, () => {
        const newState = mapStateToProps(store.getState());

        if (!isEqual(state, newState)) {
          this.setProps({ ...newState });
        }
        state = newState;
      });
    }
  };
}
