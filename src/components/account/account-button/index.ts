import { IButton, Button } from '../../base/button';


export class AccountButton extends Button {
    constructor(props: IButton) {
        super(props);
        this._props = { ...props, class: 'button_color_blue' };
    }
};