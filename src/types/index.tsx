export interface ICoursePreview{
    id: string
    title: string
    author: string
    description?: string
    price?: string
}

export interface ICourse{
    id: string,
    name: string,
}

export type RouteParamsType = {
    [key: string]: string
}  