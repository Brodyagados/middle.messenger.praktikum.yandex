import Block from '../../../utils/Block';
import './avatar.scss';
import baseSrc from '../../../assets/icons/base-avatar.svg';
import { Indexed } from '../../../utils/utils';
import { connect } from '../../../utils/HOC';
import { BaseAPI } from '../../../api/base-api';

export interface IAvatar {
  attr: {
    alt?: string,
    src?: string
  }
}

export class Avatar extends Block {
  constructor(props: IAvatar) {
    const { attr: { alt, src } } = props;
    super({
      attr: {
        alt,
        src: src ?? baseSrc,
        class: 'avatar',
        name: 'avatar',
      },
    }, 'img');
  }

  render() {
    return this.compile('', this._props);
  }
}

export enum AvatarType {
  user,
}

export const AvatarByType = (type: AvatarType) => (
  connect(Avatar, (state: Indexed) => {
    switch (type) {
      case AvatarType.user:
        const path = state.user?.avatar;
        return { attr: { src: path ? `${BaseAPI.baseUrl}/resources${path}` : null } };
      default: return {};
    }
  })
);
