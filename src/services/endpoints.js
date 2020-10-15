import { API_KEY } from './config';
import axios from '../services/axios';


export const moviesRequests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
}

export const tvRequests = {
    fetchTredingSeriesNow: `/trending/tv/day?api_key=${API_KEY}`,
    fetchTopRated: `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=2`,
    fetchActionAdventureSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10759&without_genres=16&page=3`,
    fetchAnimationSeries: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchComedySeries: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchCrimeSeries: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
    fetchDocumentarySeries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    fetchDramaSeries: `/discover/tv?api_key=${API_KEY}&with_genres=18&page=4`,
    fetchRealitySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
    fetchSciFiFantasySeries: `/discover/tv?api_key=${API_KEY}&with_genres=10765&without_genres=16&page=2`,
    fetchWarPoliticsSeries: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
}

export const getTrailers = (id) => {
 return `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}&language=en-US`

}

