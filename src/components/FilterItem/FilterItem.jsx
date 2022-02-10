import React from 'react'

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
        <div>
            <h2>{props.text}</h2>
            <input onChange={checkCheckBox} type="checkbox" name="" id=""></input>
        </div>
    )
}

export default FilterItem
