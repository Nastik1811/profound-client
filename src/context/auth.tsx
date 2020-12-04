import React, { Dispatch, ReactNode, useState } from 'react'

type Props = {
    children: React.ReactNode
  };

type UserRole = 'student'| 'teacher'| 'admin'

export type AuthContextType = {
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = React.createContext<AuthContextType>({isAuthenticated:false, setIsAuthenticated:() => {}});

export const Auth0Provider = ({children}: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children} 
        </AuthContext.Provider>
    )

}

export const useAuth0 = () =>  React.useContext(AuthContext)