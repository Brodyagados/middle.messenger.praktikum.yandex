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
  chatTitle
}

const createAvatarUrl = (path: string) => (
  path ? `${BaseAPI.baseUrl}/resources${path}` : baseSrc
);

export const AvatarByType = (type: AvatarType) => (
  connect(Avatar, (state: Indexed) => {
    switch (type) {
      case AvatarType.user:
        return { attr: { src: createAvatarUrl(state.user?.avatar) } };
      case AvatarType.chatTitle:
        return { attr: { src: createAvatarUrl(state.chatPage.current?.avatar) } };
      default: return {};
    }
  })
);
