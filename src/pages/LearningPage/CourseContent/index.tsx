import clsx from 'clsx'
import React from 'react'
import { Link } from 'react-router-dom'
import { IModule } from '../../../types'


const CourseContent = ({modules, title, activeId, onSelectLesson}:{modules?: IModule[], title: string, activeId?: string, onSelectLesson: (id: string) => void }) => {
    return(
            <ul className="course-menu">
                <span className="course-name">{title}</span>
                {modules?.map(m => 
                    <li className="module-name" key={m.id}>
                    <span>{m.name}</span>
                        <ul className="lessons-list">
                            {
                                m.lessons?.map(l => 
                                    <li key={l.id}>
                                        <div className={clsx("lessons-link", {"active": l.id === activeId})}
                                             onClick={() => onSelectLesson(l.id)}
                                        >{l.name}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </li>
                )}
            </ul>
    )
}

export default CourseContent