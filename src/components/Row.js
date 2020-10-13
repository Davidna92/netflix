import React, { useState, useEffect } from 'react'
import './Row.css';
//axios
import axios from '../services/axios';

//base URL for images
const imgurl = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLarge }) => {

    const [content, setContent] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            const req = await axios.get(fetchUrl);
            setContent(req.data.results);
            return req;
        }
        fetchData();
    }, [fetchUrl]);

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
                        title={item?.title || item?.name || item?.original_name}
                        onMouseOver={() => console.log(item?.title || item?.name || item?.original_name)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Row;