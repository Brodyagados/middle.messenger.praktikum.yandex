import Handlebars from 'handlebars';

import './chat-dialog.scss';
import additionalButtonIconSrc from '../../../assets/icons/vertical-dotes.svg'
import attachmentButtonIconSrc from '../../../assets/icons/attachment.svg'
import sendButtonIconSrc from '../../../assets/icons/arrow-right.svg'
export { default as ChatDialog } from './chat-dialog.hbs?raw';
export { ChatDialogMessage } from './chat-dialog-message';
export { ChatDialogInput } from './chat-dialog-input';

Handlebars.registerHelper('chatImages', (options) => {
    return options.fn({
        additionalButtonIconSrc,
        attachmentButtonIconSrc,
        sendButtonIconSrc
    })
});
