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
    userSettingPage: {
      avatarError: '',
    },
    userSettingEditPage: {
      error: '',
    },
    chatPage: {
      list: [],
      current: {},
      error: '',
    },
    user: {
      login: '',
      first_name: '',
      second_name: '',
      phone: '',
      email: '',
    },
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
