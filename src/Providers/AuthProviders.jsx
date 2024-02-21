import { createContext, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

  const [user,setUser]=useState(null)
  const [loading,setLoading] =useState(true)
  const axiosPublic=useAxiosPublic()

  const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser,{
      displayName:name,
      photoURL:photo
    })
  }

  const authInfo={
     user,
     loading,
     createUser,
     updateUserProfile
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;