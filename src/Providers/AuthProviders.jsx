import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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


  const signIn = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const logOut =()=>{
    setLoading(true)
    return signOut(auth)
  }
  
  
 
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = ()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  const authInfo={
     user,
     loading,
     createUser,
     updateUserProfile,
     logOut,
     signIn,
     googleSignIn
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;