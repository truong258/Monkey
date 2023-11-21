import { signOut } from "@firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase-config";

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <button onClick={handleSignOut}>SignOut</button>
    </div>
  );
};

export default HomePage;
