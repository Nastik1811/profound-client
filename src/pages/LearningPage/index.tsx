import React, { useState } from 'react'

const TheoreticalComponent = () => {
    return(
        <div className="course-component">
            <h4>
               
            </h4>
            <div>
                </div>
            <a href="/">Next</a>
        </div>
    )
}
const PracticalComponent = () => {
    return(
        <div>
            <h4>
                Practical Component
            </h4>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque deleniti quidem molestiae cupiditate voluptatum qui quod quisquam quis repellat facere delectus harum pariatur nemo, officiis nisi ad veritatis eveniet.
            </div>
            <a>Next</a>
        </div>
    )
}

const CourseContent = ({}) => {
    return(
            <ul className="course-menu">
                <li className="module-name">
                    <span>Организационная информация</span>
                    <ul className="lessons-list">
                        <li>
                            О нас
                        </li>
                        <li>
                            Организационное собрание
                        </li>
                    </ul>
                </li>
                <li className="module-name">
                    <span>Введение в искусственнный интелект</span>
                    <ul className="lessons-list">
                        <li>
                            Лекция. Введение в искусственный интеллект.
                        </li>
                        <li>
                            Организационное собрание
                        </li>
                    </ul>
                </li>
            </ul>
    )
}


const LearningPage = () => {
    const course = {
        id: 'lkeasfnl328y4u39i492',
        name: 'Deep Learning (семестр 1, осень 2020): базовый поток',
        modules:[
            {
                id: "1",
                name: "Организационная информация",
                lessons:[
                    {
                        id: "1",
                        type: 0, //theoretical
                        name: "О нас",
                        content: "Привет!Мы очень рады видеть вас на первом семестре базового потока курса Deep Learning Школы глубокого обучения ФПМИ МФТИ! В этом уроке содержатся важные организационные моменты. Пожалуйста, пролистайте все шаги этого урока (квадратики в верхней панели) и выполните все указания, чтобы ваш опыт прохождения курса был полноценным."
                    },
                    {
                        id: "2",
                        type: 0, //theoretical
                        name: "Организационное собрание",
                        content: "В этом видео Татьяна Гайнцева отвечает на популярные вопросы об организации и прохождении курса."
                    }
                ]
            },
            {
                id: "2",
                name: "Введение в искусственнный интелект",
                lessons:[
                    {
                        id: "1324",
                        type: 0, //theoretical
                        name: " Лекция. Введение в искусственный интеллект. ",
                        content: "Рады видеть вас на первом занятии нашего курса! В этом видео вы познакомитесь с основными понятиями Deep Learning и его применениями. Поможет нам в этом Михаил Бурцев --- заведующий лабораторией нейронных систем и глубокого обучения МФТИ, руководитель проекта iPavlov."  },
                    {
                        id: "1421234",
                        type: 0, //theoretical
                        name: "Организационное собрание",
                        content: "В этом видео Татьяна Гайнцева отвечает на популярные вопросы об организации и прохождении курса."
                    }
                ]
            }
        ]
    }

    const [currentLesson, setCurrentLesson] = useState({})

    return(
        <>
            <div className="sidebar">
                <CourseContent />
            </div>
            <div className="with-sidebar">
                <TheoreticalComponent/>
            </div>
        </>
    )
}

export default LearningPage