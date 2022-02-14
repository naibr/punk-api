import React,{useEffect, useState} from 'react';
import "./CardList.scss";
import BeerCard from '../BeerCard/BeerCard';

const CardList = (props) => {

    const [beers, setBeers] = useState([]);

    const {abv, classicRange, acidic} = props.checkBoxState


    const { searchTerm } = props

    const getBeers = () => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(response => {
            return response.json()
        }).then(data => {
            setBeers(data)
        })
    }

    useEffect(() => {
        return getBeers()
    }, [])

    const returnBeer = (beer) => {
        return <BeerCard  image= {beer.image_url} name= {beer.name}
        tagline= {beer.tagline} key={beers.indexOf(beer)
        } />
    }

    const BeerJSX = () => {
        return beers.map((beer) => {
            return returnBeer(beer)
        });
    }

    const filteredByNameArray = () => {
        return beers.filter(beer => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
        
    }

    const displayBeersBySearchTerm = () => {
        const beerArr = filteredByNameArray()
        return beerArr.map(beer => returnBeer(beer))
    }

    const filterByABV = () => {
        const beerArr = beers.filter(beer => beer.abv > 6)
        return beerArr
    }
    
    const displayBeersByABV = () => {
        const beerArr = filterByABV()
        return beerArr.map(beer => {
            return returnBeer(beer)
        })
    }
    
    const filterByClassicRange = () => {
        const classicArr = beers.filter(beer => beer.first_brewed.split("/")[1] < 2010)
        return classicArr
    }

    const displayBeersByClassicRange = () => {
        const classicArr = filterByClassicRange()
        return classicArr.map(beer => {
            return returnBeer(beer)
        })
    }

    const filterByAcidic = () => {
        const beerArr = beers.filter(beer => beer.ph < 4)
        return beerArr
    }

    const displayBeersByAcidic = () => {
        const beerArr = filterByAcidic()
        return beerArr.map(beer => {
            return returnBeer(beer)
        })
    }

    
    return (
        <div className='cards'>
            {beers && (acidic ? displayBeersByAcidic() : classicRange ? displayBeersByClassicRange() :  abv ? displayBeersByABV() : searchTerm ? displayBeersBySearchTerm() : BeerJSX())}
        </div>
    )
}

export default CardList;
