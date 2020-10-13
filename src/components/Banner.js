import React, { useState, useEffect } from 'react'
import './Banner.css';

//axios and requests
import axios from '../services/axios';
import { moviesRequests, tvRequests } from '../services/endpoints';


//base URL for images
const imgurl = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {

    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(moviesRequests.fetchNetflixOriginals);

            setContent(req.data.results[Math.floor(Math.random() * req.data.results.length - 1)]);
            return req;
        }
        fetchData();
    }, [])

    console.table(content);

    //truncate function
    // const truncate = (str, n) => {
    //     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    // }

    return (
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
                    <button className="banner__btn">Play</button>
                    <button className="banner__btn">My list</button>
                </div>
                <h1 className="banner__overview">
                    {content.overview}
                </h1>
            </div>

            <div className="banner__fadeBottom" />
        </header>
    );
}

export default Banner;