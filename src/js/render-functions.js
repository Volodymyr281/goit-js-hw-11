import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });

    export function createGallery(images) {
    const markup = images
        .map(
        ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="gallery-info">
            <div class="gallery-info-item">
                <span class="gallery-info-label">Likes</span>
                <span class="gallery-info-value">${likes}</span>
            </div>
            <div class="gallery-info-item">
                <span class="gallery-info-label">Views</span>
                <span class="gallery-info-value">${views}</span>
            </div>
            <div class="gallery-info-item">
                <span class="gallery-info-label">Comments</span>
                <span class="gallery-info-value">${comments}</span>
            </div>
            <div class="gallery-info-item">
                <span class="gallery-info-label">Downloads</span>
                <span class="gallery-info-value">${downloads}</span>
            </div>
            </div>
        </li>`
        )
        .join('');

    galleryEl.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    }

    export function clearGallery() {
    galleryEl.innerHTML = '';
    }

    export function showLoader() {
    loaderEl.classList.remove('is-hidden');
    }

    export function hideLoader() {
    loaderEl.classList.add('is-hidden');
}
