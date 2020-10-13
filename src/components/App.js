import React from 'react';
import './App.css';

//Components
import Row from './Row';
import Banner from './Banner';

//FetchUrls
import { moviesRequests, tvRequests } from '../services/endpoints';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner />
      <Row title="Trending Now" fetchUrl={moviesRequests.fetchTrending} />
      <Row
        title="NETFLIX Originals"
        fetchUrl={moviesRequests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Top Rated Movies" fetchUrl={moviesRequests.fetchTopRated} />
      <Row title="Crime Movies" fetchUrl={moviesRequests.fetchCrimeMovies} />
      <Row title="Actions Movies" fetchUrl={moviesRequests.fetchActionMovies} />
      <Row title="Adventures Movies" fetchUrl={moviesRequests.fetchAdventureMovies} />
      <Row title="Animations Movies" fetchUrl={moviesRequests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={moviesRequests.fetchComedyMovies} />
      <Row title="Drama Movies" fetchUrl={moviesRequests.fetchDramaMovies} />
      <Row title="Documentary" fetchUrl={moviesRequests.fetchDocumentaryMovies} />
      <Row title="For all the family" fetchUrl={moviesRequests.fetchFamilyMovies} />
      <Row title="Fantasy Movies" fetchUrl={moviesRequests.fetchFantasyMovies} />
      <Row title="History Movies" fetchUrl={moviesRequests.fetchHistoryMovies} />
      <Row title="Horror Movies" fetchUrl={moviesRequests.fetchHorrorMovies} />
      <Row title="Music Movies" fetchUrl={moviesRequests.fetchMusicMovies} />
      <Row title="Mystery Movies" fetchUrl={moviesRequests.fetchMysteryMovies} />
      <Row title="Romance" fetchUrl={moviesRequests.fetchRomanceMovies} />
      <Row title="Sci-Fi" fetchUrl={moviesRequests.fetchSciFiMovies} />
      <Row title="War and Military" fetchUrl={moviesRequests.fetchWarMovies} />
      <Row title="Thriller Movies" fetchUrl={moviesRequests.fetchThrillerMovies} />
    </div>
  );
}

export default App;
