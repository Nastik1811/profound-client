import React, { Dispatch, ReactNode, useState } from 'react'

type Props = {
    children: React.ReactNode
  };

type UserRole = 'student'| 'teacher'| 'admin'

export type AuthContextType = {
    isAuthenticated: boolean,
    changeAuthState: (authState: boolean) => void
}

const AuthContext = React.createContext<AuthContextType>({isAuthenticated:false, changeAuthState:() => {}});

export const Auth0Provider = ({children}: Props) => {
    const storedValue = localStorage.getItem('isAuthenticated')
    let initAuthState = false
    if(storedValue){
        initAuthState = JSON.parse(storedValue)
    }

    const [isAuthenticated, setIsAuthenticated] = useState(initAuthState)
    const changeAuthState = (authState: boolean) => {
        setIsAuthenticated(authState)
        localStorage.setItem('isAuthenticated', JSON.stringify(authState))
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, changeAuthState}}>
            {children} 
        </AuthContext.Provider>
    )

}

export const useAuth0 = () =>  React.useContext(AuthContext)