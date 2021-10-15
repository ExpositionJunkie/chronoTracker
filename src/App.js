
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
