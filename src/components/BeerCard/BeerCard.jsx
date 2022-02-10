import React from 'react'
import "./BeerCard.scss"

const BeerCard = (props) => {
    const {image, name, tagline} = props

    return (
        <div className='card'>
            <img className="card__img" src={image} alt="" />
            <p>{name}</p>
            <p>{tagline}</p>
        </div>
    )
}

export default BeerCard;
