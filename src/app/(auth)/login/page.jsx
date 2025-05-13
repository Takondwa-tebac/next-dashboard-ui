'use client';

import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import Image from 'next/image';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [generalError, setGeneralError] = useState(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setIsAuthenticating(true);
  //   setGeneralError(null);
  //   setErrors({});

  //   try {
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`,
  //       { username, password }
  //     );

  //     if (response.status === 200) {
  //       const { user, api_token } = response.data;

  //       if (token && user) {
  //         const res = await fetch('/api/session', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //           body: JSON.stringify({ user, token }),
  //         });

  //         if (res.ok) {
  //           console.log('Session saved successfully');
  //           setIsRedirecting(true);
  //           window.location.assign('/dashboard');
  //         } else {
  //           console.error(
  //             'Failed to save session:',
  //             res.status,
  //             res.statusText
  //           );
  //         }
  //       } else {
  //         setGeneralError(response.data.status);
  //         setErrors(response.data.errors || {});
  //       }
  //     }
  //   } catch (err) {
  //     setGeneralError('An unexpected error occurred. Please try again later.');
  //   } finally {
  //     setIsAuthenticating(false);
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setGeneralError(null);
    setErrors({});

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setIsRedirecting(true);
        window.location.assign('/dashboard');
      } else {
        const errorData = await response.json();
        setGeneralError(errorData.error || 'An error occurred.');
      }
    } catch (err) {
      setGeneralError('An unexpected error occurred. Please try again.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-100">
      <Head>
        <title>Login</title>
      </Head>

      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <Link href="/" className="flex flex-col items-center">
          <Image
            width={80}
            height={80}
            src="/logo.png"
            alt="Logo"
            className="mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-700">SMIS</h1>
        </Link>

        <p className="text-gray-600 text-center mt-6 mb-8">
          Login to your account
        </p>

        {isRedirecting && (
          <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded mb-4">
            Logging in...
          </div>
        )}
        {generalError && (
          <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4">
            {generalError}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter Username"
              className={`input input-bordered w-full ${errors.username ? 'input-error' : ''}`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="text-sm text-red-600 mt-1">{errors.username}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Enter Password"
              className={`input input-bordered w-full ${errors.password ? 'input-error' : ''}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-sm text-red-600 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <Link href="/register" className="hover:underline">
              Don&apos;t have an account?
            </Link>
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            disabled={isAuthenticating || isRedirecting}
          >
            {isAuthenticating ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
