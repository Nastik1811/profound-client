import React from 'react';
import AppHeader from './components/AppNavigation'
import DiscoverPage from './pages/DiscoverPage';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom'
import AuthPage from './pages/AuthPage';
import ConstructorPage from './pages/ConstructorPage';
import LearningPage from './pages/LearningPage';
import AppLogo from './components/AppLogo';
import AppNavigation from './components/AppNavigation';

function App() {
  const isAuthorized:boolean = true
  return (
    <div className="app-container">
      <AppLogo/>
      <AppNavigation isAuthorized={isAuthorized}/>

      <div className="content ">
        <Switch>
          <Route path="/auth" component={AuthPage}/>
          <Route exact path="/" component={DiscoverPage}/>
          <Route path="/home" component={HomePage}/>
          <Route path="/constructor" component={ConstructorPage}/>
          <Route path="/learn" component={LearningPage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
