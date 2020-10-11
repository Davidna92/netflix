import axios from 'axios';

const instance = axios.create({
    baseUrl: "http://api.themoviedb.ord/3",
});

export default instance;