import React, { useContext } from 'react'
import SnowOverlay from './components/SnowOverlay';
import { AuthContext } from './context/auth';
import useRoutes from './routes'

function App() {
  const {isAuthenticated} = useContext(AuthContext)
  const routes = useRoutes(isAuthenticated)

  return (
    <div className="app-container">
        {routes}
        <SnowOverlay/>
    </div>
  );
}

export default App;
