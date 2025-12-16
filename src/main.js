import './css/styles.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
    } from './js/render-functions';

    const form = document.querySelector('.form');
    const input = document.querySelector('.form-input');

    form.addEventListener('submit', onSearch);

    async function onSearch(e) {
    e.preventDefault();

    const query = input.value.trim();

    if (!query) {
        iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search query',
        position: 'topRight',
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const data = await getImagesByQuery(query);

        if (!data.hits || data.hits.length === 0) {
        iziToast.info({
            title: 'Info',
            message:
            'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
        });
        return;
        }

        createGallery(data.hits);
    } catch (error) {
        iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        });
    } finally {
        hideLoader();
    }
}




