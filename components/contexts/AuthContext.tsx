import { createContext, useState } from "react";
import firebase from "firebase";

import { auth } from "../../firebase/index";


export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

  const authValues = {
    userValue: [user],
    isLoggedInValue: [isLoggedIn],
    isAuthReadyValue: [isAuthReady],
  };

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setIsAuthReady(true);
  });


  return (
    <AuthContext.Provider value={authValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
