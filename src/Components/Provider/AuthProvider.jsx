import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const gitProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] =useState();
    const [loading, setLoading] =useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const logInWithGit = () =>{
        return signInWithPopup(auth, gitProvider)
    }
    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,loggedUser =>{
             console.log("logged User",loggedUser)
             setLoading(false)
             setUser(loggedUser)
         })
         return () =>{
             return unsubscribe()
         }
     },[]);

    const authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        logInWithGoogle,
        logOut,
        logInWithGit
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;