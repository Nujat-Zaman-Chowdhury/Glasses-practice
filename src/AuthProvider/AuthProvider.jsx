import { FacebookAuthProvider, GithubAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const tweeterProvider = new TwitterAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading]=useState(true);
    console.log(user);
    //create user
    const createUser = (email,password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    //update user profile
    const updateUserProfile = (name,image)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    //sign in user
    const signInUser = (email,password)=>{
        setLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
      
    }

    //google
    const googleLogin = ()=>{
        setLoading(true);
       return signInWithPopup(auth,googleProvider)
    }
    //github 
    const githubLogin = ()=>{
        setLoading(true);
       return  signInWithPopup(auth, githubProvider)
    }
    //twitter
    const twitterLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth,tweeterProvider)
    }
    //facebook
    const facebookLogin = ()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider)
    }

    //signout
    const logOut = ()=>{
        
       return signOut(auth);
    }

    //reset password
    const resetPass = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }

    //observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[])

    const authInfo = {
        createUser,
        signInUser,
        logOut,
        googleLogin,
        githubLogin,
        user,
        twitterLogin,
        facebookLogin,
        loading,
        updateUserProfile,
        resetPass
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;