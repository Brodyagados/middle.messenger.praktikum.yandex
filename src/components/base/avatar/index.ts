import Handlebars from 'handlebars';

import './avatar.scss';
import baseAvatarSrc from '../../../assets/icons/base-avatar.svg'
export { default as Avatar } from './avatar.hbs?raw';

Handlebars.registerHelper('baseAvatarSrc', (options) => {
    return options.fn({
        baseSrc: baseAvatarSrc
    })
});
