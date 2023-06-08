'use client'
import { 
    useState, 
    useEffect 
} from 'react';

import { auth } from './firebase';
import { User, createUserWithEmailAndPassword } from 'firebase/auth';

const formatAuthUser = (user: User) => ({
    uid: user.uid,
    email: user.email
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState({})
    const [loading, setLoading] = useState(true)

    const authStateChanged = async (authState: any) => {
        if (!authState) {
            setLoading(false)
            return
        }

        setLoading(true)

        let formattedUser = formatAuthUser(authState)

        setAuthUser(formattedUser);

        setLoading(false);
    }

    const clear = () => {
        setAuthUser({});
        setLoading(true);
    };

    const resetPassword = () => {
        
    }

    const createUser = (email: string, password: string) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signOut = async () => {
        await auth.signOut()
        clear()
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
      }, []);

    return {
        authUser,
        loading,
        createUser,
        signOut
    }
}