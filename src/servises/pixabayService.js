import axios from 'axios';

const API_KEY = '23083473-2d7790ee8b7206f8dabf03b90';
axios.defaults.baseURL =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12';

const getPictures = async (searchQuery = 'dog', searchPage = 1) => {
  try {
    const {
      data: { hits },
    } = await axios.get(`&q=${searchQuery}&page=${searchPage}&key=${API_KEY}`);
    return hits;
  } catch (error) {
    console.log(error.message);
  }
};

export { getPictures };
