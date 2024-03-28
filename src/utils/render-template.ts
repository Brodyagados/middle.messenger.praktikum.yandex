import Handlebars from 'handlebars';


export default function renderTemplate(template: string, context: object) {
    const hbsTemplate = Handlebars.compile(template);
    return hbsTemplate(context);
}
