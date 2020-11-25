import React from 'react'

const CourseContent = ({}) => {
    return(
            <ul className="course-menu">
                <span className="course-name">Deep Learning (семестр 1, осень 2020): базовый поток</span>
                <li className="module-name">
                    <span>Организационная информация</span>
                    <ul className="lessons-list">
                        <li>
                            <a className="lessons-link active" href="#">О нас</a>
                        </li>
                        <li>
                        <a className="lessons-link" href="#">Организационное собрание</a>
                        </li>
                    </ul>
                </li>
                <li className="module-name">
                    <span>Введение в искусственнный интелект</span>
                    <ul className="lessons-list">
                        <li>
                        <a className="lessons-link" href="#">Лекция. Введение в искусственный интеллект.</a>
                        </li>
                        <li>
                        <a className="lessons-link" href="#">Организационное собрание</a>
                        </li>
                    </ul>
                </li>
            </ul>
    )
}

export default CourseContent