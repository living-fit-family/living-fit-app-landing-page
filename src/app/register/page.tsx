'use client'

import { ChangeEvent, FormEvent, Fragment, use, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAuth, } from '../../context/AuthUserContext';
import config from '../../config/index.json';
import { Transition } from '@headlessui/react';
import { User } from 'firebase/auth'
import Image from 'next/image';

const errorMessages = {
    invalidEmail: "Please enter a valid email.",
    duplicateEmail: "Email already exists."
}

const isValidEmail = (email: string) => {
    var regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return regex.test(email);
}

const showError = (errorMessage: string) => {
    return (
        <p className="text-red-500 text-xs mx-auto italic">{errorMessage}</p>
    )
}

const createCheckoutSession = async (stripeId: string) => {
    try {
        const res = await axios.post('/api/create/checkout/session', {
            stripeId: stripeId,
        })
        const { session } = res.data
        return session;
    } catch (err) {
        throw err;
    }
}

export default function SignUp() {
    const { register, getUserStripeId } = useAuth()
    const router = useRouter()
    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false)

        try {
            if (isValidEmail(email)) {
                setShowOverlay(true)
                const user: User | null = await register(username, email, password);
                if (user) {
                    setTimeout(async () => {
                        const stripeId = await getUserStripeId(username, user.uid)
                        const session = await createCheckoutSession(stripeId)
                        router.push(session.url)
                    }, 5000)
                }
            } else {
                setError(true)
                setErrorMessage(errorMessages.invalidEmail)
            }
        } catch (err) {
            setError(true)
            setErrorMessage(errorMessages.duplicateEmail)
            setShowOverlay(false)
        }
    };

    const handleChange = (func: Function) => (e: ChangeEvent<HTMLInputElement>) => {
        func(e.target.value);
    };

    const { company } = config;
    const { name: companyName, logo } = company;

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
      }

    return (
        <div className="bg-grey-lighter min-h-screen flex flex-col relative">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <span className="sr-only">{companyName}</span>
                    <img alt="logo" className="h-16 w-auto m-auto sm:h-16" src={logo} />
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit}>
              <div className="mb-5">
                {/* <label
                  for="name"
                  className="mb-[10px] block text-sm text-black dark:text-white"
                >
                  Username
                </label> */}
                <input
                    value={username}
                    onChange={handleChange(setUsername)}
                    required
                  type="text"
                  placeholder="username"
                  className="w-full rounded-md border border-stroke bg-white py-3 px-6 text-base font-medium text-body outline-none focus:border-primary focus:shadow-input dark:border-stroke-dark dark:bg-black dark:text-white dark:focus:border-primary"
                />
              </div>
              {error ? showError(errorMessage) : null}
              <div className="mb-5">
                {/* <label
                  for="email"
                  className="mb-[10px] block text-sm text-black dark:text-white"
                >
                  Email
                </label> */}
                <input
                value={email}
                onChange={handleChange(setEmail)}
                required
                  type="email"
                  placeholder="email"
                  className="w-full rounded-md border border-stroke bg-white py-3 px-6 text-base font-medium text-body outline-none focus:border-primary focus:shadow-input dark:border-stroke-dark dark:bg-black dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                {/* <label
                  for="password"
                  class="mb-[10px] block text-sm text-black dark:text-white"
                >
                  Password
                </label> */}
                <input
                value={password}
                onChange={handleChange(setPassWord)}
                type={isPasswordVisible ? "text" : "password"}
                required
                  placeholder="password"
                  className="w-full rounded-md border border-stroke bg-white py-3 px-6 text-base font-medium text-body outline-none focus:border-primary focus:shadow-input dark:border-stroke-dark dark:bg-black dark:text-white dark:focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-primary p-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </button>
            </form>
                    {/* <form onSubmit={handleSubmit}>
                        <input
                            value={username}
                            onChange={handleChange(setUsername)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="username"
                            placeholder="Username"
                            required />
                        {error ? showError(errorMessage) : null}
                        <input
                            value={email}
                            onChange={handleChange(setEmail)}
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            required />
                            <div className="relative container mx-auto">
                        <input
                            value={password}
                            onChange={handleChange(setPassWord)}
                            type={isPasswordVisible ? "text" : "password"}
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            required />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                            onClick={() => togglePasswordVisibility()}>
                                {!isPasswordVisible ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                            </svg>
                            ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                />
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            )}
                        </button>
                        </div>
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
                        >Create Account</button>
                    </form> */}
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
                    <a className="no-underline border-b border-blue text-blue" href="https://billing.stripe.com/p/login/5kAeXO3HI3JxeNafYY">
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