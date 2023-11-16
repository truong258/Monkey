import { createContext, useContext, useState } from "react";

const AuthContex = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  return <AuthContex.Provider value={value} {...props}></AuthContex.Provider>;
}

function useAuth() {
  const context = useContext(AuthContex);
  if (typeof context === "undefined")
    throw new Error("Use Authen must be use within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
