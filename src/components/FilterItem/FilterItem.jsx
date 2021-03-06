import React from 'react'
import "./FilterItem.scss"

const FilterItem = (props) => {
   

    const checkCheckBox = (event) => {
        if(event.target.checked){
            props.setState(true)
        }
        else { 
            props.setState(false)
        }
    }
    return (
        <div className='filters'>
            <h2>{props.text}</h2>
            <input className='boxes' onChange={checkCheckBox} type="checkbox" name="" id=""></input>
        </div>
    )
}

export default FilterItem
