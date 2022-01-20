import axios from 'axios';

const KEY = 'AIzaSyBDZeWmQRagXcF6IjBUGZ7Io4oA14-_fKo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})