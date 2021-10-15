import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '23083473-2d7790ee8b7206f8dabf03b90';
let searchQ = 'Forest+Spring';
let searchPage = 1;
let searchImgType = 'photo';
let searchOrientation = 'horizontal';
let searchPerPage = 12;

axios.defaults.baseURL = `${BASE_URL}?image_type=${searchImgType}&orientation=${searchOrientation}`;

const getPictures = async (query, page) => {
  try {
    const {
      data: { hits },
    } = await axios.get(
      `&q=${searchQ}&page=${searchPage}&per_page=${searchPerPage}&key=${API_KEY}`,
    );
    return hits;
  } catch (error) {
    console.log(error.message);
  }
};

export default getPictures;
getPictures();
