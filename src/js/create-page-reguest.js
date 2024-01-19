// import axios from 'axios';
// import iziToast from 'izitoast';
// const btnMoreEl = document.querySelector('.btn-more');
// const loader = document.querySelector('.loader');

// const createPageReguest = q => {

//   return async () => {
//     try {
//       const { hits, total } = await getPhoto({ page, perPage, q });
//       // перевірка на останнє фото
//       if (page >= Math.ceil(total / perPage)) {
//         iziToast.error({
//           message: "We're sorry, but you've reached the end of search results.",
//           position: 'topRight',
//         });
//         btnMoreEl.style.display = 'none';
//         loader.style.display = 'none';
//         return;
//       }
//       page++;
//       return hits;
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };

// =====================================================================

// if (searchTerm === '') {
//   iziToast.error({
//     message: 'you need to write the text',
//     position: 'topRight',
//   });
//   return;
// }
// const fetchPhoto = createPageReguest(searchTerm);

// const sendFetch = async () => {
//   loader.style.display = 'flex';
//   const photoResponse = await fetchPhoto();
//   if (photoResponse.length == 0) {
//     iziToast.error({
//       message: "Sorry we can't find this photo",
//       position: 'topRight',
//     });
//     btnMoreEl.style.display = 'none';
//     loader.style.display = 'none';
//     formEl.search.value = '';
//     return;
//   } else {
//     loader.style.display = 'none';
//     render(photoResponse);
//     gallery.refresh();
//     if (btnMoreEl.style.display === 'flex' && photoResponse.length >= 1) {
//       const lastItem = listRender.lastElementChild;
//       window.scrollBy({
//         top: 850,
//         behavior: 'smooth',
//       });
//     }
//     btnMoreEl.style.display = 'flex';
//   }
// };

// await sendFetch();
