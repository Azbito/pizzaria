import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null)

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
