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
    signInWithEmailAndPassword
} from 'firebase/auth';

import {
    doc,
    getDoc,
    addDoc,
    collection,
    onSnapshot,
    updateDoc
} from "firebase/firestore";


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

    const createCheckoutSession = async (username: string, uid: string): Promise<void> => {
        const checkoutSessionRef = await addDoc(
            collection(doc(db, 'users', uid), 'checkout_sessions'),
            {
                cancel_url: `${window.location.origin}/?canceled=true`,
                price: 'price_1OfA86ANCpLvBRruwFNYr7KN',
                billing_address_collection: 'auto',
                success_url: `${window.location.origin}/confirmation/?success=true&session_id={CHECKOUT_SESSION_ID}`,
                trial_from_plan: true,
                allow_promotion_codes: true,
            }
        )

        onSnapshot(checkoutSessionRef, async (doc) => {
            // @ts-expect-error
            const { error, url } = doc.data()

            if (error) {
                // Show an error to your customer and
                // inspect your Cloud Function logs in the Firebase console.
                alert(`An error occured: ${error.message}`);
            }

            if (url) {
                console.log(url)
                window.location.assign(url)
            }
        })

        const userRef = doc(db, "users", uid);
        onSnapshot(userRef, async (doc) => {
            if (doc.exists()) {
                await updateDoc(userRef, {
                    username
                })
            }
        })
    }

    const register = async (email: string, password: string): Promise<User | null> => {
        try {
            await createUserWithEmailAndPassword(auth, email, password).catch((err) => { throw err }
            );
            if (auth.currentUser) {
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
        createCheckoutSession,
        loading,
        register,
        signIn,
        signOut
    }
}