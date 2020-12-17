import React, { useState } from 'react'
import { LessonComponentType } from '../../../types'
import HTMLReactParser from 'html-react-parser'
import { Button, TextField } from '@material-ui/core'
import Message from '../../../components/Message'
import { RadioGroup, Radio, FormControlLabel, Checkbox } from '@material-ui/core'

//answer -  строка ответ, которая будет сравниваться с а
type TaskComponentPropsType = {
    componentId: string,
    content: string,
    componentType: LessonComponentType,
    onSubmit: (isRight: boolean, id: string) => void ,
    completed: boolean
}

const TaskComponent: React.FC<TaskComponentPropsType> = ({componentId, content, componentType, onSubmit, completed}) => {

    if(componentType === "theory"){
        return <Theory 
                    content={content}
                    onSubmit={(isRight) => onSubmit(isRight, componentId)}
                    completed={completed}
                />
    }
    const task = JSON.parse(content)
    console.log(task)
    if(task.type === "text"){
        return <TextTask 
            text={task.text} 
            rightAnswer={task.answers[0]}
            onSubmit={(isRight) => onSubmit(isRight, componentId)}
            completed={completed}
            />
    }
    if(task.type === "single"){
        return <SingleTask 
                    text={task.text} 
                    options={task.options} 
                    rightAnswer={task.answers[0]}
                    onSubmit={(isRight) => onSubmit(isRight, componentId)}
                    completed={completed}
                    />
    }
    if(task.type === "multiple"){
        return <MultipleTask 
                    text={task.text} 
                    options={task.options} 
                    rightAnswer={task.answers[0]}
                    onSubmit={(isRight) => onSubmit(isRight, componentId)}
                    completed={completed}
                    />
    }

    return(
        <Message message="Undefined task type :("/>
    )
}


type TextTaskProps = {
    text: string,
    rightAnswer: string,
    onSubmit: (isRight: boolean) => void,
    completed: boolean
}

const TextTask: React.FC<TextTaskProps> = ({text, rightAnswer, onSubmit, completed}) => {
    const [input, setInput] = useState("")

    const SubmitAnswer = () => {
        onSubmit(input.toLowerCase() === rightAnswer.toLowerCase())
        setInput("")
    }

    return(
        <>
            <span className="task-text">{text}</span>
            <TextField label="Enter your answer" value={input} disabled={completed} onChange={e => setInput(e.target.value)} />
            <Button onClick={SubmitAnswer} disabled={completed}>Submit</Button>
        </>
    )
}

type SingleTaskProps = {
    text: string,
    options: string[],
    rightAnswer: string,
    onSubmit: (isRight: boolean) => void,
    completed: boolean
}

const SingleTask: React.FC<SingleTaskProps> = ({text, options, rightAnswer, onSubmit, completed }) => {
    const [answer, setAnswer] = useState("")

    const SubmitAnswer = () => {
        onSubmit(answer.toLowerCase() === rightAnswer.toLowerCase())
    }
    return(
        <>
            <span className="task-text">{text}</span>
            <RadioGroup>
                {options.map(o => 
                    <FormControlLabel key={o} value={o} control={<Radio />} label={o} onClick={console.log}/>
                )}
            </RadioGroup>
            <Button onClick={SubmitAnswer} disabled={completed}>Submit</Button>
        </>
    )
}
type MultipleTaskProps = {
    text: string,
    options: string[],
    rightAnswer: string[],
    completed: boolean,
    onSubmit: (isRight: boolean) => void
}
const MultipleTask: React.FC<MultipleTaskProps> = ({text, options }) => {
    
    return(
        <>
            <span className="task-text">{text}</span>
            <RadioGroup>
                {options.map(o => {
                    <FormControlLabel key={o} value={o} control={<Checkbox />} label={o} />
                })}
            </RadioGroup>
        </>
    )
}
const MatchTask: React.FC<TaskComponentPropsType> = ({content, componentType }) => {
    
    return(
        <>
            course-component
        </>
    )
}


type TheoryProps = {
    content: string,
    onSubmit: (isRight: boolean) => void,
    completed: boolean
}

const Theory: React.FC<TheoryProps> = ({content, onSubmit, completed}) => {

    return(
        <>
            <div>
                {HTMLReactParser(content)}
            </div>
            {completed && <span>You have been already studied this material.</span>}
            <Button onClick={() => onSubmit(true)} disabled={completed}>Got it!</Button>
        </>
    )
}

export default TaskComponent