import axios from 'axios';

const API_KEY = '55467714-b30f475b74465712765c76d28'; 
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => response.data);
}