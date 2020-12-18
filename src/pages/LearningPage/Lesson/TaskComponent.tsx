import React, { useEffect, useState } from 'react'
import { LessonComponent, LessonComponentType } from '../../../types'
import HTMLReactParser from 'html-react-parser'
import { Button, TextField } from '@material-ui/core'
import Message from '../../../components/Message'
import { RadioGroup, Radio, FormControlLabel, Checkbox } from '@material-ui/core'

//answer -  строка ответ, которая будет сравниваться с а
type TaskComponentPropsType = {
    component: LessonComponent
    onSubmit: (solution: Solution) => void 
}

export type Solution = {
    componentId: number,
    status: "wrong" | "correct",
    points: number,
    answers?: string[]
}

const TaskComponent: React.FC<TaskComponentPropsType> = ({component, onSubmit}) => {
    const [input, setInput] = useState(component.answer || "")

    useEffect(() => setInput(component.answer || ""),[component] )
    const parsedContent = component.componentType === "practice" && JSON.parse(component.content)
    const text = parsedContent ? parsedContent.text : component.content
    const rightAnswer = parsedContent ? parsedContent.answers[0] : ""

    const SubmitAnswer = () => {

        onSubmit(
            {
                componentId: +component.id,
                status: rightAnswer === input ? "correct" : "wrong",
                points: rightAnswer === input ? component.maxPoints : 0,
                answers: component.componentType === "practice" ? [input] : undefined
            }
        )
    }
    // if(component.componentType in ["pr", "theory"]{
    //     return(
    //         <Message message="Undefined task type :("/>
    //     )
    // }
    return(
        <>
            <div className="task-text">
                {HTMLReactParser(text)}
            </div>
            {
                component.componentType === "practice" &&
                <TextField label="Enter your answer" value={input} disabled={component.completed} onChange={e => setInput(e.target.value)} />
            }
            {component.completed && component.componentType === "theory" && <span>You have been already studied this material.</span>}
            <Button onClick={SubmitAnswer} disabled={component.completed}>
                {component.componentType === "theory" ? "Got it!" : "Submit answer"}
            </Button>
        </>
    )

    
}

export default TaskComponent