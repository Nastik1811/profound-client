import React from 'react';
import AppHeader from './components/AppHeader'
import DiscoverPage from './pages/DiscoverPage';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom'
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="app-container">
      <AppHeader/>
      <Switch>
        <Route path="/auth" component={AuthPage}/>
        <Route exact path="/" component={DiscoverPage}/>
        <Route path="/home" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
