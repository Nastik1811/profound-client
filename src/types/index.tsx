export type RouteParamsType = {
    [key: string]: string
}  

export interface ICoursePreview{
    id: string
    title: string
    author: string
    description?: string
    price?: string
}

export interface ICourse{
    id: string
    name: string
    description?: string
    requirements?: string
    modules?: IModule[]
}

export interface IModule{
    id: string,
    name: string
} 
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

export type LessonComponentType = "theory" | "practice"
export type LessonComponent = ISimpleComponent

export interface ILesson{
    id: string
    name: string
    order: number
    components: LessonComponent[]
}
export type ContentType = string
export interface ISimpleComponentDetails{
    content: ContentType
    points: number
    componentType: LessonComponentType
}

export interface ISimpleComponent extends ISimpleComponentDetails{
    id: string
    order: number 
}

export interface IModuleExtended extends IModule {
} 


export interface ILessonExtended extends ILesson{   
}

