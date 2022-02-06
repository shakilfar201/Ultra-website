import React from 'react';
import { Navbar } from './Components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './globalStyle';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/home'>
            <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
