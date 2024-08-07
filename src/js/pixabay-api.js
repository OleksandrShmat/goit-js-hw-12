import axios from 'axios';
const loader = document.querySelector('.loader');

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export async function performSearch(searchQuery, page) {
  const perPage = 20;
  const API_KEY = '44758497-ea11318ae0823ef09cb8fbdb5';
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    per_page: perPage,
    page: page,
  });

  const { data } = await axios.get(`https://pixabay.com/api/?${searchParams}`);
  console.log(data);
  return data;
}
export function clearGallery() {
  gallery.innerHTML = '';
}
