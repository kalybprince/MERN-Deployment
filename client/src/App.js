import './App.css';
import Main from './views/Main'
import AddNewPirate from './views/AddNewPirate'
import PirateInfo from './views/PirateInfo';
import { 
  BrowserRouter,
  Link,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pirates">
          <Main/>
        </Route>
        <Route exact path="/pirate/new">
          <AddNewPirate/>
        </Route>
        <Route exact path="/pirate/:id">
          <PirateInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
