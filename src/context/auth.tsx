import React from 'react'
import Loader from '../components/Loader'
import { useAuth } from '../hooks/auth.hook'

const noop = () => {}

type AuthContexType = {
    token: string | null,
    userId: string | null,
    firstname: string | null,
    lastname: string | null,
    role: "user" | "admin" | null,
    login: (jwtToken: string, id: string, firstname: string, lastname: string, role: "user" | "admin") => void,
    logout: () => void,
    isAuthenticated: boolean
}
export const AuthContext = React.createContext<AuthContexType>({
  token: null,
  userId: null,
  firstname: null ,
  lastname: null ,
  role: null,
  login: (jwtToken: string, id: string, firstname: string, lastname: string, role: "user" | "admin") => {},
  logout: () => {},
  isAuthenticated: false
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const {login, token, userId, firstname, lastname, logout, ready, role} = useAuth()
    const isAuthenticated = !!token

    if(!ready){
        return(
            <Loader/>
        )
    }

    return(
        <AuthContext.Provider value={{
            token, login, logout, firstname, lastname, userId, isAuthenticated, role
        }}>
            {children}
        </AuthContext.Provider>
    )
}