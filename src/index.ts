import Handlebars from 'handlebars';

import { Page, page } from './utils/route';
import * as Components from './components';

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const currentPage = Object.values(page).find((item) => item.path === path);
  
  if (!currentPage) {
    window.location.href = page.notFound.path;
    return;
  }

  currentPage.route();
});

document.addEventListener('click', (e) => {
  if (!(e.target instanceof Element)) {
    return;
  }

  const path = e.target.getAttribute('page');

  if (path) {
    Page.getByPath(path)?.route();

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
