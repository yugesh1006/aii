import React from 'react';
import './card.css';

const Card = ({
    poster,
    title,
    date,
    venue,
    address,
    url,
   toggled
}) => {

    return (
        <div className={`${toggled ? 'list_card' : 'card'}`}>
            <img className="poster" src={`${poster}`} alt={title} />
            <span className="description">
                <b className="title">{title}</b>
                <span className="subTitle">{date}</span>
                <span className="venue"> <b>Venue:</b><br/>{venue}</span>
                <span className="address"> <b>Address:</b><br/>{address}</span>
                <a href={`${url}`} target="_blank" rel="noreferrer"> 
                Know More
                </a>
            </span>
        </div>
    );
}
 
export default Card;