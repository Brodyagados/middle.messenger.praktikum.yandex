import Block from '../../../utils/Block';
import './avatar.scss';
import baseSrc from '../../../assets/icons/base-avatar.svg'
import template from './avatar.hbs?raw';
import renderTemplate from '../../../utils/render-template';


interface IAvatar {
    src?: string,
    alt: string
}

export class Avatar extends Block {
    constructor(props: IAvatar) {
        super('img', props);
        this._props = { baseSrc, ...props };
    }

    render(): string {
        return renderTemplate(template, this._props);
    }
}

