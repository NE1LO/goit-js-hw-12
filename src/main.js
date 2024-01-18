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
btnMoreEl.style.display = 'none';
let sendFetch = null;

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  if (sendFetch !== null) {
    btnMoreEl.removeEventListener('click', sendFetch);
  }

  listRender.innerHTML = '';
  const searchTerm = formEl.search.value.trim();
  if (searchTerm.length == 0) {
    iziToast.error({
      message: 'you need to write the text',
      position: 'topRight',
    });
  }
  const fetchPhoto = createPageReguest(searchTerm);

  sendFetch = async () => {
    loader.style.display = 'flex';
    const photoResponse = await fetchPhoto();
    if (photoResponse.length < 1) {
      iziToast.error({
        message: "Sorry we can't find this photo",
        position: 'topRight',
      });
      btnMoreEl.style.display = 'none';
      loader.style.display = 'none';
      formEl.search.value = '';
    } else {
      loader.style.display = 'none';
      render(photoResponse);
      gallery.refresh();
      btnMoreEl.style.display = 'flex';
    }
  };

  await sendFetch();

  btnMoreEl.addEventListener('click', sendFetch);
});
