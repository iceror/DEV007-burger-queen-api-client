import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const sendUserToContext = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
    setUser(user)
    // if (!user) {
    //   setUser(sessionStorage.getItem('user', JSON.stringify(user)))
    // }
  }

  return <UserContext.Provider value={{ user, sendUserToContext }}>
    {children}
  </UserContext.Provider>
}
