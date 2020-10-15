import React from 'react';
import './App.css';

//Components
import Row from './Row';
import Banner from './Banner';
import Navbar from './Navbar';

//FetchUrls
import { moviesRequests, tvRequests } from '../services/endpoints';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Trending Now" fetchUrl={tvRequests.fetchTredingSeriesNow} />
      <Row
        title="NETFLIX Originals"
        fetchUrl={moviesRequests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Top Rated" fetchUrl={tvRequests.fetchTopRated} />
      <Row title="Action and Adventures" fetchUrl={tvRequests.fetchActionAdventureSeries} />
      <Row title="Crimes and Investigations" fetchUrl={tvRequests.fetchCrimeSeries} />
      <Row title="Comedy" fetchUrl={tvRequests.fetchComedySeries} />
      <Row title="Documentary" fetchUrl={tvRequests.fetchDocumentarySeries} />
      <Row title="Reality" fetchUrl={tvRequests.fetchRealitySeries} />
      <Row title="Sci-Fi and Fantasy" fetchUrl={tvRequests.fetchSciFiFantasySeries} />
      <Row title="War and Politics" fetchUrl={tvRequests.fetchWarPoliticsSeries} />
      <Row title="Drama" fetchUrl={tvRequests.fetchDramaSeries} />

      
    </div>
  );
}

export default App;
