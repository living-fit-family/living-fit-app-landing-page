'use client'
import { 
    createContext, 
    useContext, 
    PropsWithChildren
} from 'react'
import { User, IdTokenResult } from 'firebase/auth'
import useFirebaseAuth from '../lib/useFirebaseAuth';

const defaultIdTokenResult: IdTokenResult = {
    authTime: '',
    expirationTime: '', 
    issuedAtTime: '',
    signInProvider: '',
    signInSecondFactor: '', 
    token: '', 
    claims: {}
}

const defaultUser: User = {
    emailVerified: false,
    isAnonymous: false,
    metadata: {},
    providerData: [],
    refreshToken: '', 
    tenantId: '', 
    delete: (): Promise<void> => Promise.resolve(), 
    getIdToken: (forceRefresh?: boolean): Promise<string> => Promise.resolve(''),
    getIdTokenResult: (): Promise<IdTokenResult> => Promise.resolve(defaultIdTokenResult), 
    reload: (): Promise<void> => Promise.resolve(), 
    toJSON: async () => {},
    displayName: '',
    email: '', 
    phoneNumber: '', 
    photoURL: '',
    providerId: '', 
    uid: ''
}

const authUserContext = createContext({
    authUser: {},
    loading: true,
    getUserStripeId: (username: string, uid: string): Promise<string> => Promise.resolve(""),
    register: (username: string, email: string, password: string): Promise<User | null> => Promise.resolve(defaultUser),
    signIn: (email: string, password: string): Promise<User | null> => Promise.resolve(defaultUser),
    signOut: async () => {}
});

export function AuthUserProvider({ children } : PropsWithChildren<{}>) {
    const auth = useFirebaseAuth();
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
  }

 export const useAuth = () => useContext(authUserContext);

