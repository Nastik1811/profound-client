import clsx from 'clsx'
import React from 'react'
import { LessonComponent } from '../../../types'



type NavTabPropsType = {
    active: boolean;
    completed: boolean;
    onClick: () => void
}

export const NavTab: React.FC<NavTabPropsType> = ({active, completed, onClick}) => {
    return(
        <div className={clsx("step-indicator", {"active": active, "completed": completed})} 
             onClick={onClick}></div>
    )
}

type LessonNavigationPropsType = {
    components: LessonComponent[],
    activeIndex: number,
    onIndexChange: (index: number) => void
}

const LessonNavigation: React.FC<LessonNavigationPropsType> = ({components, activeIndex, onIndexChange}) => {
    return(
        <div className="lesson-progress-container">
            {components?.map((c, i) => <NavTab active={activeIndex === i} onClick={() => onIndexChange(i)} completed={c.completed!}/>)}
        </div>
    )
}

export default LessonNavigation