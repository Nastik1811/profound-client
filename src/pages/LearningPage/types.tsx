type TaskType =  'single' | 'mult' | 'text' | 'sort' | 'match' | 'file'

export interface IPrascticalComponent{
    id: string, 
    title: string
    completed: boolean
    task_type: TaskType 
    task_title: string 
}

export interface ITheoreticComponent{
    id: string, 
    title: string 
    completed: boolean
    content: string
}

export type LessonComponentType = IPrascticalComponent | ITheoreticComponent

export interface ILesson{
    id: string
    name: string
    components: LessonComponentType[]
}