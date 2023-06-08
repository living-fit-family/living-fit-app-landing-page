'use client'
import { 
    createContext, 
    useContext, 
    PropsWithChildren
} from 'react'

import useFirebaseAuth from '../lib/useFirebaseAuth';

const authUserContext = createContext({
    authUser: {},
    loading: true,
    createUser: (email: string, password: string) => {},
    signOut: async () => {}
});

export function AuthUserProvider({ children } : PropsWithChildren<{}>) {
    const auth = useFirebaseAuth();
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
  }

 export const useAuth = () => useContext(authUserContext);

