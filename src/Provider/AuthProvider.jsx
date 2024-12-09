import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../Components/firebase/Firebase.config";


export const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createNewUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const userLogin = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (updateData)=>{
    return updateProfile(auth.currentUser,updateData);
  }

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    });
    return  ()=>{
      unsub();
    }
  },[])


  const logOut = () =>{
    setLoading(true);
    signOut(auth);
  }

  const authInfo ={
    user,
    setUser,
    createNewUser,
    logOut,
    userLogin,
    loading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;