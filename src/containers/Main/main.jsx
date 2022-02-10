import React from 'react'
import "./main.scss"
import CardList from '../../components/CardList/CardList'
import beers from '../../data/beers'

const main = () => {

    const images = beers.filter(beer => beer.image_url).slice(0, 5);
    console.log(images)

    return (
        <div>
           <CardList images={images}/>
        </div>
    )
}

export default main
