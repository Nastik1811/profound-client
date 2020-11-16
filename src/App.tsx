import React from 'react';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">        
          Profound
        </div>
        <div className="search-container"></div>
        <nav>
            <a href="#">Sign in</a>
            <a href="#">Sign up</a>
        </nav>
    </header>

    <div className="content">
                <section className="section">
                    <header className="section-header">
                        <h1>Catalog</h1>
                    </header>
                    <div className="course-list">
                        <div className="course-preview">
                            <div className="preview-img-container">
                            </div>
                            <div className="preview-info">
                                <h4 className="preview-title">Calligraphy</h4>
                                <p className="preview-description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam at culpa, eum impedit iste, laboriosam maxime modi nisi qui quis quisquam reprehenderit tempore
                                </p>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
    </div>
  );
}

export default App;
