import React from 'react';
import AppHeader from './components/AppHeader'
import CoursePreview from './components/CoursePreview';

function App() {
  return (
    <div className="app-container">
      <AppHeader/>
      <div className="content">
        <section className="section">
            <h3 className="section-titile">Popular courses</h3>
            <div className="course-list">
                <CoursePreview 
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
            </div>
        </section>
    </div>
    </div>
  );
}

export default App;
