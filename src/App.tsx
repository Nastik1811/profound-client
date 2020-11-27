import React from 'react'
import { useAuth0 } from './context/auth'
import useRoutes from './routes'

function App() {
  const isAuthenticated = useAuth0()!.isAuthenticated 
  const routes = useRoutes(isAuthenticated)

  return (
    <div className="app-container">
        {routes}
    </div>
  );
}

export default App;
