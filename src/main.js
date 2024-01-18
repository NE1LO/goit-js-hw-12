// ================================імпорт рендер функції
import { createPageReguest } from './js/create-page-reguest';
import { render } from './js/render';
// ================================імпорт бібліотеки для відкриття модалки
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// ================================імпорт бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// ================================пошук елементів на сторінці
const listRender = document.querySelector('.photo-list');
const formEl = document.querySelector('.form');
const loader = document.querySelector('.loader');
const btnMoreEl = document.querySelector('.btn-more');
const gallery = new SimpleLightbox('.photo-list a');
// ==========================================================

formEl.addEventListener('submit', async event => {
  event.preventDefault();

  listRender.innerHTML = '';
  const searchTerm = formEl.search.value.trim();
  if (searchTerm === '') {
    iziToast.error({
      message: 'you need to write the text',
      position: 'topRight',
    });
    return;
  }
  const fetchPhoto = createPageReguest(searchTerm);

  const sendFetch = async () => {
    loader.style.display = 'flex';
    const photoResponse = await fetchPhoto();
    if (photoResponse.length == 0) {
      iziToast.error({
        message: "Sorry we can't find this photo",
        position: 'topRight',
      });
      btnMoreEl.style.display = 'none';
      loader.style.display = 'none';
      formEl.search.value = '';
      return;
    } else {
      loader.style.display = 'none';
      render(photoResponse);
      gallery.refresh();
      if (btnMoreEl.style.display === 'flex') {
        const lastItem = listRender.lastElementChild;
        window.scrollBy({
          top: 850,
          behavior: 'smooth',
        });
      }
      btnMoreEl.style.display = 'flex';
    }
  };

  await sendFetch();

  btnMoreEl.addEventListener('click', sendFetch);
});
