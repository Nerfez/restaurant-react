import { createContext, useState, useEffect, useContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../../../firebase";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoadingData(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (email, pwd) => {
    try {
      await createUserWithEmailAndPassword(auth, email, pwd);
      console.log("Sign-up successful");
    } catch (error) {
      console.error("Sign-up failed", error.message);
      throw error;
    }
  };

  const signIn = async (email, pwd) => {
    try {
      await signInWithEmailAndPassword(auth, email, pwd);
      console.log("Sign-in successful");
    } catch (error) {
      console.error("Sign-in failed", error.message);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("Sign-out successful");
    } catch (error) {
      console.error("Sign-out failed", error.message);
      throw error;
    }
  };

  return (
    <UserContext.Provider
      value={{ currentUser, loadingData, signUp, signIn, signOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};
