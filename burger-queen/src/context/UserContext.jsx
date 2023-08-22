import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [role, setRole] = useState(undefined);

  const sendUserToContext = (user) => {
    setUser(user)
    // setRole(user.user.role)
  }

  return <UserContext.Provider value={{ user, sendUserToContext }}>
    {children}
  </UserContext.Provider>
}
