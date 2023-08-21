import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const sendUserToContext = (user) => {
    console.log(user);
    setUser(user)
  }

  return <UserContext.Provider value={{ user, sendUserToContext }}>
    {children}
  </UserContext.Provider>
}
