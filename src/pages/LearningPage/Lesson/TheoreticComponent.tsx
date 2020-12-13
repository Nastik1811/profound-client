import React from 'react'
import { ITheoreticComponent } from '../../../types'

const TheoreticComponent: React.FC<ITheoreticComponent> = ({id, title, completed, content}) => {
    return(
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default TheoreticComponent

