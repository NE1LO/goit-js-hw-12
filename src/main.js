import axios from 'axios';
// ================================імпорт рендер функції
import { render } from './js/render';
// ================================імпорт бібліотеки стилів
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// ================================пошук елементів на сторінці
const listRender = document.querySelector('.photo-list');
const formEl = document.querySelector('.form');
const loader = document.querySelector('.loader');
const btnMoreEl = document.querySelector('.btn-more');
const gallery = new SimpleLightbox('.photo-list a');
// ==========================================================

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '41690622-1f4c10e5fb0aefa04cb32f231',
    'Content-Type': 'application/json',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  },
});

const getPhoto = async params => {
  try {
    const response = await instance.get('', { params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const params = {
  page: 1,
  per_page: 20,
  q: '',
};

// ===========================================================

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  listRender.innerHTML = '';
  params.page = 1;
  params.q = formEl.search.value.trim();

  if (params.q === '') {
    iziToast.error({
      message: 'you need to write the text',
      position: 'topRight',
    });
    return;
  }
  loader.style.display = 'flex';
  const renderPhoto = await getPhoto(params);

  if (renderPhoto.hits.length == 0) {
    iziToast.error({
      message: "Sorry we can't find this photo",
      position: 'topRight',
    });
    loader.style.display = 'none';
    btnMoreEl.style.display = 'none';
    return;
  } else {
    render(renderPhoto.hits);
    gallery.refresh();
    loader.style.display = 'none';
    btnMoreEl.style.display = 'flex';
  }
});

btnMoreEl.addEventListener('click', async event => {
  event.preventDefault();
  params.page++;
  const renderMorePhoto = await getPhoto(params);
  if (renderMorePhoto.hits.length < params.per_page) {
    iziToast.error({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    btnMoreEl.style.display = 'none';

    return;
  } else {
    render(renderMorePhoto.hits);
    window.scrollBy({
      top:
        3 *
        document.querySelector('.photo-list__item').getBoundingClientRect()
          .height,
      behavior: 'smooth',
    });

    gallery.refresh();
  }
});
