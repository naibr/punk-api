import React from 'react'
import "./main.scss"
import BeerCard from '../../components/BeerCard/BeerCard'

const Main = (props) => {
    const {beersArr} = props
    const BeerJSX = beersArr.map((beer) => {
        return <BeerCard 
        image= {beer.image_url}
        name= {beer.name}
        tagline= {beer.tagline}
        />
    });

    return (
        <div className='cards'>
           {BeerJSX}
        </div>
    )
};

export default Main;
