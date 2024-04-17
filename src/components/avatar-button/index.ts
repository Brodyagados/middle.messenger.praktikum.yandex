import Block from '../../utils/Block';
import './avatar-button.scss';
import template from './avatar-button.hbs?raw';
import { AvatarByType, AvatarType, IAvatar } from '../base/avatar';

interface IAvatarButton {
  avatarProps: IAvatar,
  events: Record<string, unknown>
}

export class AvatarButton extends Block {
  constructor(props: IAvatarButton) {
    super({
      avatar: new (AvatarByType(AvatarType.user))({ ...props.avatarProps }),
      attr: { class: 'avatar-button' },
      ...props,
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
