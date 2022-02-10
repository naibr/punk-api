import React from 'react';
import "./CardList.scss";
import BeerCard from '../BeerCard/BeerCard';
import beers from "../../data/beers";


const CardList = (props) => {
    const {abv, classicRange, acidic} = props.checkBoxState

    const { searchTerm } = props

    const returnBeer = (beer) => {
        return <BeerCard  image= {beer.image_url} name= {beer.name}
        tagline= {beer.tagline}
        />
    }

    const BeerJSX = beers.map((beer) => {
        return returnBeer(beer)
    });

    const filteredByNameArray =  beers.filter(beer => {
            return beer.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

    const filterByABV = beers.filter(beer => {
        return beer.abv > 6
    })
  
    
    const displayBeersByABV = filterByABV.map(beer => {
        return returnBeer(beer)
    })

    const displayBeersBySearchTerm = filteredByNameArray.map(beer => {
            return  returnBeer(beer)
        })
    
        const filterByClassicRange = beers.filter(beer => {
            return beer.first_brewed.split("/")[1] < 2010
        })

        const displayBeersByClassicRange = filterByClassicRange.map(beer => {
            return returnBeer(beer)
        })

        const filterByAcidic = beers.filter(beer => {
            return beer.ph < 4
        })

        const displayBeersByAcidic = filterByAcidic.map(beer => {
            return returnBeer(beer)
        })

       
        
    

    return (
        <div className='cards'>
            {acidic ? displayBeersByAcidic : classicRange ? displayBeersByClassicRange :  abv ? displayBeersByABV : searchTerm ? displayBeersBySearchTerm : BeerJSX }

        </div>
    )
}

export default CardList;
