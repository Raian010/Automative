import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
 
export const AuthContext = createContext(null);


const Authprovider = ({children}) => {
 
    const auth = getAuth(app);

    const [loading,setLoading] = useState(true);
   
    const [user,setUser] = useState([])

    // User signUp
    const signUp = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }


    // User signIn
    const signIn = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // Logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[auth])

    // google login
    const provider = new GoogleAuthProvider();
    const googleSIgn = () => {
        return signInWithPopup(auth,provider)
    }

    const info = {
      user,
      signUp,
      signIn,
      logout,
      loading,
      googleSIgn
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

Authprovider.propTypes= {
    children: PropTypes.node.isRequired
}

export default Authprovider;