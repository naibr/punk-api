import React from 'react'
import "./main.scss"
import CardList from '../../components/CardList/CardList';

const Main = (props) => {

    return (
        <CardList searchTerm={props.searchTerm}  checkBoxState={props.checkBoxState}/>
    )
};

export default Main;
