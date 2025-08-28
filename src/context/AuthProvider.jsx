import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

export default function AuthProvider({children}) {
 const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
 const provider = new GoogleAuthProvider();



  // signUp//

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password)
  }

  // signIn //

    const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // googleLogin//

    const googleLogin = () => {
    return signInWithPopup(auth,provider);
  };

  // Observe user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
    const userInfo = {
        user,
        loading,
        setLoading,
        signUp,
        signIn,
        googleLogin,
        logOut
    }
  return (
    <AuthContext value={userInfo}>
        {children}
    </AuthContext>
  )
}
