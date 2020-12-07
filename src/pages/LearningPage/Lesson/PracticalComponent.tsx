import React from 'react'
import { IPrascticalComponent } from '../types'

const PracticalComponent: React.FC<IPrascticalComponent> = ({id, title, task_title, task_type, completed}) => {
    return(
        <div>
            <h3>{title}</h3>
            <h4>{task_title }</h4>
            
        </div>
    )
}

export default PracticalComponent