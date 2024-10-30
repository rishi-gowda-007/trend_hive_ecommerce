import React from 'react';
import './IC_details.css';

function IC_details({ sc ,scvisi,setScvisi}) {

    if (!sc || !sc.rating) {
        return <></>;
    }

    const imageStyle = {
        backgroundImage: `url(${sc.image})`
    };

    const closeDetails = () => {
        setScvisi(false);
    };

    const detailsStyle = {
        display: scvisi ? 'flex' : 'none'
    };

    return (
        <div id='IC_details_main' style={detailsStyle}>
            <div id='IC_image' style={imageStyle}></div>
            <div id='IC_font'>
                <h1 id='IC_title'>{sc.title}</h1>
                <hr />
                <p id='Ic_rating'>✪ Rating - {sc.rating.rate} | Number of Ratings - {sc.rating.count}</p>
                <hr />
                <p id='Ic_desc'>{sc.description}</p>
                <br />
                <h2 id='Ic_price'>Price- ${sc.price}</h2>
            </div>
            <button onClick={closeDetails} id='ic_close'>Close</button>
        </div>
    );
}

export default IC_details;
