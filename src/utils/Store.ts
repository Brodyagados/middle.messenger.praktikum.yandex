import EventBus from './EventBus';
import { Indexed, set } from './utils';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  _state: Indexed = {
    signUpPage: {
      error: '',
    },
    loginPage: {
      error: '',
    },
    changePasswordPage: {
      error: '',
    },
    userSettingEditPage: {
      error: '',
    },
    user: {},
  };

  getState() {
    return this._state;
  }

  set(path: string, value: unknown) {
    set(this._state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
