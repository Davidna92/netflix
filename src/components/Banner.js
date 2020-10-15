import React, { useState, useEffect } from 'react'
import './Banner.css';

//axios and requests
import axios from '../services/axios';
import { moviesRequests, tvRequests } from '../services/endpoints';
import Youtube from 'react-youtube';

import { getTrailers } from '../services/endpoints';


//base URL for images
const imgurl = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {

    const [content, setContent] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(moviesRequests.fetchNetflixOriginals);
            setContent(req.data.results[Math.floor(Math.random() * req.data.results.length + 1)]);
            return req;
        }
        fetchData();
    }, [])


    // useEffect(() => {
    //     const handleVideos = async () => {
    //         const req = await axios.get(getTrailers(content.id));
    //         if (trailerUrl) {
    //             setTrailerUrl("");
    //         } else {
    //             setTrailerUrl(req.data.results[0].key)
    //         }
    //     }
    //     handleVideos();
    // }, [content.id, trailerUrl])


    const handleVideos = async () => {
        const req = await axios.get(getTrailers(content.id));
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            setTrailerUrl(req.data.results[0].key);
        }
        console.log(content.id);
    }


    const opts = {
        height: "400px",
        width: "100%",
        playerVars: {
            autoplay: 1,
            rel: 0,
            showinfo: 0
        }
    }

    return (
        <React.Fragment>
            <header className="banner"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${imgurl}${content?.backdrop_path}`,
                    backgroundPosition: 'center center'

                }}

            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {content?.title || content?.name || content?.original_name}
                    </h1>

                    <div className="banner__btns">
                        <button
                            onClick={() => handleVideos()}
                            className="banner__btn">Play</button>
                        <button className="banner__btn">My list</button>
                    </div>
                    <h1 className="banner__overview">
                        {content.overview}
                    </h1>
                </div>
                <div className="banner__fadeBottom" />
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

            </header>
        </React.Fragment>
    );
}
export default Banner;