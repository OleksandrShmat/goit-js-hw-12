import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('#gallery');

export function renderImages(images) {
  const markup = images
    .map(image => {
      return `
     <div class="image-card">
            <a href="${image.largeImageURL}"><img src="${image.webformatURL}" width=360 height=200 alt="${image.tags}" /></a>
            <div class="image-text">
            <ul>
        <li><p>likes:</p><p>${image.likes}</p></li>
        <li><p>views:</p><p>${image.views}</p></li>
        <li><p>comments:</p><p>${image.comments}</p></li>
        <li><p>downloads:</p><p>${image.downloads}</p></li>
        </ul>
        </div>
      </div>
    `;
    })
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
const lightbox = new SimpleLightbox('.image-card a', {
  captionsData: 'alt',
  captionDelay: 250,
  navText: ['&larr;', '&rarr;'],
  closeText: '&times;',
});
