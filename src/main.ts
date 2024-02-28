import './style.css';
import { page } from './utils/route';

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const currentPage = Object.values(page).find((item) => item.path === path);
  
  if (!currentPage) {
    window.location.href = page.notFound.path;
    return;
  }

  currentPage!.route();
})