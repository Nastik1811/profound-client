import React, { Dispatch, ReactNode, useState } from 'react'
import Loader from '../components/Loader'
import { useAuth } from '../hooks/auth.hook'

const noop = () => {}

type AuthContexType = {
    token: string | null,
    userId: string | null,
    username: string | null,
    login: (jwtToken: string, id: string, username: string) => void,
    logout: () => void,
    isAuthenticated: boolean
}
export const AuthContext = React.createContext<AuthContexType>({
  token: "sfdf",
  userId: "123123",
  username: "Nastya",
  login: (jwtToken: string, id: string, username: string) => {},
  logout: () => {},
  isAuthenticated: false
})

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const {login, token, userId, username, logout, ready} = useAuth()
    const isAuthenticated = !!token

    if(!ready){
        return(
            <Loader/>
        )
    }

    return(
        <AuthContext.Provider value={{
            token, login, logout, userId, username, isAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}