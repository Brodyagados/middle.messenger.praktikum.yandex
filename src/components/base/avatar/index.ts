import Block from '../../../utils/Block';
import './avatar.scss';
import baseSrc from '../../../assets/icons/base-avatar.svg';

interface IAvatar {
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
        name: 'avatar'
      }
    }, 'img');
  }

  render() {
    return this.compile('', this._props);
  }
}
