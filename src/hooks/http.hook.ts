import {useState, useCallback} from 'react'


export const useHttp = (token?: string|null) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState<boolean>(false)

    const request = useCallback(async (url, method = 'GET', body = null, headers ={} ) => {
        setLoading(true)
        try{
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
              }
            if(token){
                headers['Authorization'] = `Bearer ${token}`
            }
            const res = await fetch(url, {method, body, headers})
            const data = await res.json().catch(console.log)
            
            if(!res.ok){
                throw new Error(data.errorText || "Something went wrong")
            }
            
            setLoading(false)
            return data 
        }catch(e){
            setLoading(false)
            setError(e.message)
            throw e
        }
       

    }, [])

    const clearError = useCallback(()=> setError(null), [])

    return {loading, clearError, request, error}
}
