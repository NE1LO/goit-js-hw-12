import axios from 'axios';
import iziToast from 'izitoast';
const btnMoreEl = document.querySelector('.btn-more');

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

const getPhoto = async ({ page, perPage, q }) => {
  try {
    const response = await instance.get('', {
      params: {
        page,
        per_page: perPage,
        q,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const createPageReguest = q => {
  let isLastPhoto = false;
  let page = 1;
  const perPage = 40;
  return async () => {
    try {
      console.log(isLastPhoto);
      if (isLastPhoto) {
        iziToast.error({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
        btnMoreEl.style.display = 'none';
        return [];
      }
      const { hits, total } = await getPhoto({ page, perPage, q });
      // перевірка на останнє фото
      if (page >= Math.ceil(total / perPage)) {
        isLastPhoto = true;
      }
      page++;
      return hits;
    } catch (error) {
      console.error(error);
    }
  };
};

export { createPageReguest };
