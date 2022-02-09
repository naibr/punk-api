import './App.scss';
import beers from "./data/beers";
import main from './containers/Main/main';
import nav from './containers/nav/nav';


const App = () => {

  return (
    <div className="App">
     <img src={beers[0].image_url} alt="" />

    </div>
  );
}

export default App;
