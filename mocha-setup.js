import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<body></body>');

global.window = jsdom.window;
global.document = jsdom.window.document;
global.Node = jsdom.window.Node;
global.HTMLTemplateElement = jsdom.window.HTMLTemplateElement;
global.XMLHttpRequest = jsdom.window.XMLHttpRequest;
