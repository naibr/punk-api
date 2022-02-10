import './App.scss';
import beers from "./data/beers";
import Main from './containers/Main/Main';
import BeerCard from './components/BeerCard/BeerCard';
import Nav from './containers/Nav/Nav';


const App = () => {

  return (
    <div className="App">
      <Nav />
      <Main beersArr={beers}/>

    </div>
  );
}

export default App;
