import React from 'react'

const AppHeader = () => {
    return(
        <header className="app-header">
            <nav className="app-nav">
            <div className="logo-container">        
            Profound
            </div>
            <div className="search-container"></div>
            <a href="#" className="auth-link">Sign in</a>
            <a href="#" className="auth-link">Sign up</a>
            </nav>
        </header>
    )
}


export default AppHeader