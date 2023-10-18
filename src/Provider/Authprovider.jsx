import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
 
export const AuthContext = createContext(null);

const Authprovider = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser] = useState(null)

    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // setLoading(false);
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