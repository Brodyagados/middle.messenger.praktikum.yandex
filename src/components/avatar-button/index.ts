import Block from '../../utils/Block';
import './avatar-button.scss';
import template from './avatar-button.hbs?raw';
import { Avatar, IAvatar } from '../base/avatar';

interface IAvatarButton {
  avatarProps: IAvatar,
  events: Record<string, unknown>
}

export class AvatarButton extends Block {
  constructor(props: IAvatarButton) {
    super({
      avatar: new Avatar(props.avatarProps),
      attr: { class: 'avatar-button' },
      ...props
    });
  }

  render() {
    return this.compile(template, this._props);
  }
}
