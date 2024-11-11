import {useState} from 'react';
import Link from "next/link";
import Head from 'next/head';
import {authGuard} from '@/lib/middleware';
import withSession from '@/lib/session';
import axios from "axios";

export const getServerSideProps = withSession(authGuard);


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [generalError, setGeneralError] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleLogin = async () => {
        setIsAuthenticating(true);
        setGeneralError(null);
        setErrors({});


        try {
            const response = await axios.post("/api/login", {username, password});
            if (response.status === 200) {
                const {logged_in} = response.data;

                if (logged_in) {
                    setIsRedirecting(true);
                    window.location.assign('/dashboard');
                }

                if (!logged_in && !response.data.errors) {
                    setGeneralError(response.data.status);
                }

                if (response.data.errors) {
                    setGeneralError(response.data.status);
                    setErrors(response.data.errors);
                }
            }
            setIsAuthenticating(false);
        } catch (err) {
            setIsAuthenticating(false);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50
            bg-gradient-to-bl
         to-blue-100 via-white via-30% from-white  border-t-4 border-t-blue-900">
            <Head>
                <title>Login</title>
            </Head>
            <div className="rounded-lg flex max-w-sm w-full">
                <div className="w-full p-8">
                    <Link href="/" className="flex flex-col justify-center items-center">
                        <img src="/images/logo.png" className="size-16" alt=""/>
                        <header className="text-primary font-bold text-4xl pl-4 lg:pl-0 my-10 lg:text-center">
                            Money Pot
                        </header>
                    </Link>
                    <div className="px-4 py-4 my-4">
                        <p className="text-gray-600 mb-8">Login to your account </p>
                        {
                            isRedirecting &&
                            <div className="bg-green-700 flex gap-2 text-white px-4 py-4 rounded-lg text-sm mb-2">
                                <span className="loading loading-spinner loading-sm"></span>
                                Logging in ....
                            </div>
                        }
                        {
                            generalError &&
                            <div className="bg-red-400 flex gap-2 text-white px-4 py-4 rounded-lg text-sm mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5"
                                     stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"/>
                                </svg>
                                {generalError}
                            </div>
                        }
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Enter Username"
                                    className={`input input-bordered w-full ${errors.username ? 'input-error' : ''}`}
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            </div>

                            <div className="form-control">
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className={`input input-bordered w-full ${errors?.password ? 'input-error' : ''}`}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>

                            <div className="form-control flex flex-row items-center gap-2">
                                <Link href="/register"
                                      className="text-sm text-primary border-r-1 border-gray-400 pr-2 hover:underline">
                                    Don&#39;t have an account ?
                                </Link>
                                <a href="#" className="text-sm text-gray-500 hover:underline">
                                    Forgot Password
                                </a>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary w-full"
                                        onClick={handleLogin}
                                        disabled={isRedirecting || isAuthenticating}>
                                    {
                                        isAuthenticating ?
                                            <span className="loading loading-spinner loading-sm"></span> : ''
                                    }
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

