import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";


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

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("changed fjslkdfsaklfj, ", user)
            const userEmail = currentUser?.email || userInfo?.email;
            const loggedUser = { email: userEmail };
            setUserInfo(currentUser)
            setLoading(false)

            // sfds
            if (currentUser) {
                axios.post('https://roomify-assignment10.vercel.app/jwt', loggedUser, { withCredentials: true })
                    .then(res => {
                        // console.log('token response', res.data);
                    })
            }
            else {
                axios.post('https://roomify-assignment10.vercel.app/logout', loggedUser, {
                    withCredentials: true
                })
                    .then(res => {
                        // console.log(res.data);
                    })
            }


        })
        return () => {
            unSubscribe()
        }
    }, [])
    const handleSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleProvider = new GoogleAuthProvider(); 
    const handleGoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const AuthInfo = {
        userInfo,
        handleRegistrationAuth,
        handleLoginAuth,
        handleSignOut,
        loading,
        handleGoogleLogin
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