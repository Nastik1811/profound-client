import React, { useState } from 'react'

const TheoreticalComponent = () => {
    return(
        <div className="course-component">
                <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In egestas erat imperdiet sed. In fermentum posuere urna nec tincidunt. Ornare massa eget egestas purus viverra accumsan in. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Faucibus vitae aliquet nec ullamcorper sit. Porttitor massa id neque aliquam vestibulum. Non pulvinar neque laoreet suspendisse interdum consectetur libero. Blandit massa enim nec dui nunc mattis enim ut tellus. Viverra maecenas accumsan lacus vel. Sagittis vitae et leo duis. Vitae purus faucibus ornare suspendisse sed. Sed felis eget velit aliquet sagittis id consectetur purus. Gravida neque convallis a cras semper auctor neque vitae tempus. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Facilisi cras fermentum odio eu feugiat pretium nibh. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Mus mauris vitae ultricies leo.

Augue ut lectus arcu bibendum at varius vel pharetra vel. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Faucibus et molestie ac feugiat sed lectus. Sed viverra ipsum nunc aliquet bibendum enim. Sit amet est placerat in egestas. Viverra tellus in hac habitasse platea dictumst. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Scelerisque varius morbi enim nunc. Sapien faucibus et molestie ac feugiat sed. Arcu vitae elementum curabitur vitae nunc sed. Tempor id eu nisl nunc mi ipsum. Arcu cursus vitae congue mauris rhoncus. Felis donec et odio pellentesque. Ultricies mi eget mauris pharetra et ultrices neque ornare. Nunc sed augue lacus viverra vitae congue. Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Semper eget duis at tellus at urna condimentum mattis.
                </p>
        </div>
    )
}
const PracticalComponent = () => {
    return(
        <div className="course-component">
            <h4>
                Practical Component
            </h4>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At itaque deleniti quidem molestiae cupiditate voluptatum qui quod quisquam quis repellat facere delectus harum pariatur nemo, officiis nisi ad veritatis eveniet.
            </div>
        </div>
    )
}

const Discussion = () => {
    return(
        <section className="discussion-section">
            <header className="section-header">
                <h3 className="component-title">Обсудить</h3>
            </header>
            <div className="discussion">
                <div>
                        <input placeholder="Enter comment"/>
                        <button>Leave a comment</button>
                </div>
                <div className="comment"> {/*Use material cards*/}
                    <span className="">Author name</span>
                    <p>Comment text</p>
                </div> 
                <div className="comment"> 
                    <span>Author name</span>
                    <p>Comment text</p>
                </div>  
            </div>
        </section>
    )
}

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


const LearningPage = () => {
    return(
        <>
            <div className="sidebar">
                <a href="/home" className="back-btn">Back to home</a>
                <CourseContent />
            </div>
            <div className="learn-container">
                <section className="learning-component">
                    <header className="section-header">
                        <h3 className="component-title">Lesson title</h3>
                        <hr className="delimiter"/>
                    </header>

                    <div className="course-component">

                    </div>
                    <TheoreticalComponent/>
                    <a href="#" className="to-next">Next step</a>
                </section>
                <Discussion/>
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