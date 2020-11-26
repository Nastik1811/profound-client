import React, { Dispatch, ReactNode, useState } from 'react'

type Props = {
    children: React.ReactNode
  };

type UserRole = 'student'| 'teacher'| 'admin'

type AuthContextType = {
    isAuthenticated: boolean,
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = React.createContext<AuthContextType|undefined>(undefined);

export const Auth0Provider = ({children}: Props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children} 
        </AuthContext.Provider>
    )

}

export const useAuth0 = () =>  React.useContext(AuthContext)