import './App.scss';
import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';
import { useState } from 'react';



const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)

  const [abv, setAbv] = useState(false);
  const [classicRange, setClassicRange] = useState(false);
  const [acidic, setAcidic] = useState(false);

  const setCheckBoxState = {setAbv: setAbv, setClassicRange: setClassicRange, setAcidic: setAcidic}
  const checkBoxState = {abv: abv, classicRange: classicRange, acidic: acidic}

  return (
    <div className="App">
      <Nav setSearchTerm={setSearchTerm}  checkBoxState={setCheckBoxState}/>
      <Main searchTerm={searchTerm} checkBoxState={checkBoxState}/>

    </div>
  );
}

export default App;
