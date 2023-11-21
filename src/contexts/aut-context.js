import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase-config";

const AuthContex = createContext();
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  }, []);
  return <AuthContex.Provider value={value} {...props}></AuthContex.Provider>;
}

function useAuth() {
  const context = useContext(AuthContex);
  if (typeof context === "undefined")
    throw new Error("Use Authen must be use within AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
