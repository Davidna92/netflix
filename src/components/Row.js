import React, { useState, useEffect } from 'react'
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from '../services/axios';

import { getTrailers } from '../services/endpoints';

//base URL for images
const imgurl = 'https://image.tmdb.org/t/p/original/';


const Row = ({ title, fetchUrl, isLarge }) => {

    const [content, setContent] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(fetchUrl);
            setContent(req.data.results);
            return req;
        }
        fetchData();
    }, [fetchUrl]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoPlay: 1,
        }
    }

    const handleClick = async (id) => {
        const req = await axios.get(getTrailers(id))
        console.log(req.data.results[0])
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            setTrailerUrl(req.data.results[0].key)
        }
    }



    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row__posters`}>
                {content.map(item => (
                    <img
                        src={`${imgurl}${isLarge ? item.poster_path : item.backdrop_path}`}
                        alt={item.name}
                        className={`row__poster ${isLarge && "row__poster__large"}`}
                        key={item.id}
                        onClick={() => handleClick(item.id)}
                        title={item?.title || item?.name || item?.original_name}
                    
                    />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;

