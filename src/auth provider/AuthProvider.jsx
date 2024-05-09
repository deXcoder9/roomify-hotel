import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleRegistrationAuth = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLoginAuth = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, user => {
            // console.log("changed fjslkdfsaklfj, ", user)
            setUserInfo(user)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const AuthInfo = {
        userInfo,
        handleRegistrationAuth,
        handleLoginAuth,
        handleSignOut,
        loading
    }

    return (
        <div>
             <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;