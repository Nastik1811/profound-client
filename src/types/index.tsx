export type RouteParamsType = {
    [key: string]: string
}  

export interface ICoursePreview{
    id: string
    title: string
    creator: {id:number, firstName: string, lastName: string}
    description?: string
    price?: string
    status: string
    publishedAt?: Date
    progress?: number
}

export interface ICourse{
    id: string
    title: string
    creator?: {id:number, firstName: string, lastName: string}
    description?: string
    requirements?: string
    price?: number
    modules?: IModule[]
}

export interface IModule{
    id: string,
    name: string,
    lessons?:  ILesson[]
} 
export type TaskType =  'single' | 'mult' | 'text' | 'sort' | 'match' | 'file'| 'theory'

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
export interface LessonComponent extends ISimpleComponent{
    completed?: boolean
}

export interface ILesson{
    id: string
    name: string
    components?: LessonComponent[]
}
export type ContentType = string
export interface ISimpleComponentDetails{
    content: ContentType
    maxPoints: number
    componentType: LessonComponentType,
    comments?: Comment[]
}

export interface ISimpleComponent extends ISimpleComponentDetails{
    id: string
}



export interface ILessonExtended extends ILesson{   
}

export type Comment = {
    createdAt: Date
    id: string,
    text: string,
    user:{
        firstname: string,
        lastname: string
    }

}

