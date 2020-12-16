import React, { Dispatch, ReactNode, useState } from 'react'
import Loader from '../components/Loader'
import { useAuth } from '../hooks/auth.hook'

const noop = () => {}

type AuthContexType = {
    token: string | null,
    userId: string | null,
    login: (jwtToken: string, id: string) => void,
    logout: () => void,
    isAuthenticated: boolean
}
export const AuthContext = React.createContext<AuthContexType>({
  token: null,
  userId: null,
  login: (jwtToken: string, id: string) => {},
  logout: () => {},
  isAuthenticated: false
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const {login, token, userId, logout, ready} = useAuth()
    const isAuthenticated = !!token

    if(!ready){
        return(
            <Loader/>
        )
    }

    return(
        <AuthContext.Provider value={{
            token, login, logout, userId, isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}