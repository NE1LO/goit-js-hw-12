// ================================імпорт рендер функції
import { render } from './js/render';
// ================================імпорт бібліотеки для відкриття модалки
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// ================================імпорт бібліотеки для виведення помилок
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// ================================імпорт бібліотеки AXIOS
import axios from 'axios';
// ================================пошук елементів на сторінці
const listRender = document.querySelector('.photo-list');
const formEl = document.querySelector('.form');
const loader = document.querySelector('.loader');
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

let page = 1;
let perPage = 20;

const getPhoto = async searchTerm => {
  try {
    const response = await instance.get('', {
      params: {
        q: searchTerm,
        page: 1,
        per_page: 40,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  const searchTerm = formEl.search.value;
  // console.log(e);
  try {
    const data = await getPhoto(searchTerm);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
});
