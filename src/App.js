import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Button from '@mui/material/Button';
import {BrowserRouter as Router,Route,Switch}  from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route  path='/add' component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
