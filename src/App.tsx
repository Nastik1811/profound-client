import React from 'react';
import AppHeader from './components/AppNavigation'
import DiscoverPage from './pages/DiscoverPage';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import ConstructorPage from './pages/ConstructorPage';
import LearningPage from './pages/LearningPage';

function App() {
  return (
    <div className="app-container">
        <Switch>
          <Route exact path="/" component={DiscoverPage}/>
          <Route path="/auth" component={AuthPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/constructor" component={ConstructorPage}/>
          <Route path="/learn" component={LearningPage}/>
        </Switch>
    </div>
  );
}

export default App;
