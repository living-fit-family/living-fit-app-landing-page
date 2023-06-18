'use client'
import { 
    useState, 
    useEffect 
} from 'react';

import { auth } from './firebase';
import { 
    User, 
    createUserWithEmailAndPassword, 
    sendEmailVerification, 
    updateProfile 
} from 'firebase/auth';

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

    const register =  async (firstName: string, email: string, password: string): Promise<User | null> => {
       try {
        await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
          console.log(err)
        );
        if (auth.currentUser) {
            await sendEmailVerification(auth.currentUser).catch((err) =>
            console.log(err)
            );
            await updateProfile(auth.currentUser, { displayName: firstName }).catch(
            (err) => console.log(err)
            );
        }
      } catch (err) {
        console.log(err);
      }
       return auth.currentUser;
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
        register,
        signOut
    }
}