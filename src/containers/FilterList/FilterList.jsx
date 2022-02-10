import React from 'react'
import FilterItem from '../../components/FilterItem/FilterItem'

const FilterList = (props) => {
    const {setAbv, setClassicRange, setAcidic} = props.checkBoxState
    return (
        <>
            <FilterItem setState = {setAbv} text={`High ABV (>6.0%)`} />
            <FilterItem setState = {setClassicRange} text={`Classic Range`} />
            <FilterItem setState = {setAcidic} text={`Acidic (ph<4)`} />
        </>
    )
}

export default FilterList
