import { render } from './js/render';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const API_KEY = '41690622-1f4c10e5fb0aefa04cb32f231';
const listRender = document.querySelector('.photo-list');
const formEl = document.querySelector('.form');
const loader = document.querySelector('.loader');
const gallery = new SimpleLightbox('.photo-list a');

const formSubmit = e => {
  e.preventDefault();
  if (listRender.children.length > 0) {
    listRender.innerHTML = '';
  }
  loader.style.display = 'inline-block';

  axios.defaults.baseURL = 'https://pixabay.com/api/';
  axios.defaults.params = {
    key: API_KEY,
    image_type: 'photo',
    q: formEl.search.value,
    orientation: 'horizontal',
    safesearch: true,
  };

  const searchImages = async () => {
    const response = await axios.get();
    return response;
  };

  searchImages()
    .then(response => response.data)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        loader.style.display = 'none';
      } else {
        listRender.innerHTML = render(response.hits);
        loader.style.display = 'none';
        gallery.refresh();
      }
    })
    .catch(err =>
      iziToast.error({
        message: 'error server',
        position: 'topRight',
      })
    );
  formEl.reset();
};

formEl.addEventListener('submit', formSubmit);
