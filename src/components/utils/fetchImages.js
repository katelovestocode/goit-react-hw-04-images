import axios from 'axios';

const API_KEY = '29432108-cac2e2e1a5a7f25b3217a8a0e';

const OPTIONS = '&image_type=photo&orientation=horizontal&safesearch=true';

axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImages(searchQuery, page) {
  const response = await axios.get(
    `?key=${API_KEY}&q=${searchQuery}${OPTIONS}&page=${page}&per_page=${12}`
  );
  //   console.log(response.data);
  return response.data;
}

export { fetchImages };
