import React from 'react'
import CoursePreview from './CoursePreview'


const HomePage = () => {
    return(
    <div className="content home">
        <div className="user-menu">
            <div className="user-img"></div>
            <nav>
                <ul className="menu-list">
                    <li>
                        <a className="menu-link active">My courses</a>
                    </li>
                    <li>
                        <a className="menu-link">Created courses</a>
                    </li>
                    <li>
                        <a className="menu-link">Achievements</a>
                    </li>
                    <li>
                        <button className="logout-link">Log out</button>
                    </li>
                </ul>
            </nav>
        </div>
        <section className="section">
            <h3 className="section-titile">Current courses</h3>
            <CoursePreview 
                    title="Deep Learning (семестр 1, осень 2020): базовый" 
                    creator="Школа глубокого обучения МФТИ"
                    price="15$"
                    onClick={() => console.log("hehe")}
                    />
        </section>
    </div>
    )
}

export default HomePage