import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  
  const form = event.currentTarget;
  const query = form.elements['search-text'].value.trim();

  if (query === "") {
    iziToast.error({ message: "Please fill in the search field!" });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message: "Sorry, there are no images matching your search query. Please try again!"
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({ message: `Something went wrong: ${error.message}` });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}