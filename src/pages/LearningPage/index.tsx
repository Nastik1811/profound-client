import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import CourseContent from './CourseContent'
import LessonNavigation from './LessonNavigation'

interface RouteParams {
    id: string
}  
interface Course {
    id: string,
    name: string,

}
type Lesson = {
    id: string
} 
type LessonComponent = {
    
}

const LearningPage = () => {
    const {id} = useParams<RouteParams>()
    const [course, setCourse] = useState<Course|null>(null)

    return(
        <>
            <div className="sidebar">
                <a href="/home" className="back-btn">Back to home</a>
                <CourseContent/>
            </div>
            <div className="learn-container">
                <section className="learning-component">
                    <header>
                        <h3 className="component-title">О нас</h3>
                        <hr className="delimiter"/>
                        <LessonNavigation/>
                    </header>
                    <TheoreticalComponent/>
                    <a href="#" className="to-next">Next step</a>
                </section>
            </div>
        </>
    )
}

export default LearningPage


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