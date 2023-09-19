'use client'

import { 
    useState, 
    useEffect 
} from 'react';

import { 
    auth, 
    db 
} from './firebase';

import {
    User,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    updateProfile,
    signInWithEmailAndPassword
} from 'firebase/auth';

import { 
    doc, 
    getDoc,
    onSnapshot
} from "firebase/firestore"; 


const formatAuthUser = (user: User) => ({
    uid: user.uid,
    email: user.email
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [firestoreUser, setFirestoreUser] = useState({})

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

    const getUserStripeId = async (uid: string): Promise<string> => {
        let stripeId = "";

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            var data = docSnap.data();
            stripeId = data.stripeId
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
        
        return stripeId
    }

    const register = async (username: string, email: string, password: string): Promise<User | null> => {
       try {
        await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
          { throw err }
        );
        if (auth.currentUser) {
            await updateProfile(auth.currentUser, { displayName: username })
            await sendEmailVerification(auth.currentUser).catch((err) => console.log(err));
        }
      } catch (err) {
        throw err
      }
       return auth.currentUser;
    }

    const signIn = async (email: string, password: string): Promise<User | null> => {
        try {
            signInWithEmailAndPassword(auth, email, password).catch((err) => {
                console.log(err)
            })
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
        getUserStripeId,
        loading,
        register,
        signIn,
        signOut
    }
}