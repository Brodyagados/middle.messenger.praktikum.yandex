import { Page, page } from './utils/route';

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
  const { target } = e;
  if (!(target instanceof Element) || target.getAttribute('type') === 'submit') {
    return;
  }

  const path = target.getAttribute('page');

  if (path) {
    Page.getByPath(path)?.route();

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
