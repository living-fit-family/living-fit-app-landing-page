'use client'

import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth, } from '../../context/AuthUserContext';
import config from '../../config/index.json';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

const showError = (error: boolean) => {
    if (error) {
        return (
            <p className="text-red-500 text-xs mx-auto italic">Email already exists.</p>
        )
    }
}

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [showOverlay, setShowOverlay] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter()
    const { createUser } = useAuth()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false)
        setShowOverlay(true)

        try {
            await createUser(email, password);
            
            const res = await axios.post('/api/stripe/checkout', {
                email: email,
                lookup_key: 'Test Plan'
            })

            const { session } = res.data

            if (session != null) {
                router.push(session.url)
            }
        } catch (err) {
            setError(true)
            setShowOverlay(false)
        }
    };
    const handleChange = (func: Function) => (e: ChangeEvent<HTMLInputElement>) => {
        func(e.target.value);
    };

    const { company } = config;
    const { name: companyName, logo } = company;

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col relative">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <span className="sr-only">{companyName}</span>
                    <Image alt="logo" className="h-16 w-auto m-auto sm:h-16" src={logo} />
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            value={firstName}
                            onChange={handleChange(setFirstName)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="firstname"
                            placeholder="First Name"
                            required />
                        <input
                            value={lastName}
                            onChange={handleChange(setLastName)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="lastname"
                            placeholder="Last Name"
                            required />
                        {showError(error)}
                        <input
                            value={email}
                            onChange={handleChange(setEmail)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            required />
                        <input
                            value={password}
                            onChange={handleChange(setPassWord)}
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            required />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                    </form>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the&nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and&nbsp;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
                <div className="text-grey-dark mt-6">
                    Already have an account?&nbsp;
                    <a className="no-underline border-b border-blue text-blue" href="../login/">
                        Log in
                    </a>.
                </div>
            </div>
            <Transition.Root show={showOverlay} as={Fragment}>
                <div className="absolute bg-white bg-opacity-50 z-10 h-full w-full flex items-center justify-center">
                    <div className="flex items-center">
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </Transition.Root>
        </div>
    );
};