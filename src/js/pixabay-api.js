import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '53720827-61573bf1b5aa28f0604879aae';

export async function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: 1,
    };

    const { data } = await axios.get(BASE_URL, { params });
    return data;
}
