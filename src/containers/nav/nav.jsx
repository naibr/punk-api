import React from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../FilterList/FilterList";
import "./Nav.scss";

const Nav = (props) => {
  return (
    <nav>
      <SearchBox setSearchTerm={props.setSearchTerm} />
      <FilterList checkBoxState={props.checkBoxState} />
    </nav>
  );
};

export default Nav;