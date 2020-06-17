import axios from 'axios';

const KEY = '15725368-0fb82873f639e86c3efee11f4';
const BASE_URL = 'https://pixabay.com/api/?q=';
const PER_PAGE = 'per_page=12';

const fetchImages = (query, pageNumber) => {
  return axios.get(
    `${BASE_URL}${query}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&${PER_PAGE}`,
  );
};

export default fetchImages;
