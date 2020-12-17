import {useState, useCallback, useEffect} from 'react'
const storageName = 'userData'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [firstname, setFirstname] = useState(null)
  const [lastname, setLastname] = useState(null)
  const [role, setRole] = useState(null)

  const login = useCallback((jwtToken, id, firstname, lastname, role) => {
    setToken(jwtToken)
    setUserId(id)
    setFirstname(firstname)
    setLastname(lastname)
    setRole(role)
    
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken, firstname, lastname, role
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setFirstname(null)
    setLastname(null)
    setRole(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const storedValue = localStorage.getItem(storageName)
    let data
    if(storedValue){
        data = JSON.parse(storedValue)
    }

    if (data && data.token) {
        login(data.token, data.userId, data.firstname, data.lastname, data.role)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, firstname, lastname, ready, role }
}