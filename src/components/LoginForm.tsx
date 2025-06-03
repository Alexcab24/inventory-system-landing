'use client';

import { useState } from 'react';
import Link from 'next/link';

const LoginForm = () => {
    const [workspace, setWorkspace] = useState('');
    const [error, setError] = useState('');

    const validateWorkspace = () => {
        if (!workspace) {
            setError('El espacio de trabajo es requerido');
            return false;
        }
        if (!/^[a-z0-9-]+$/.test(workspace)) {
            setError('Solo letras minúsculas, números y guiones');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateWorkspace()) {
            // Redirigir al subdominio específico
            window.location.href = `https://${workspace}.inventorysystem.com/login`;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
            {/* Header */}
            <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105">
                            InventorySystem
                        </Link>
                        <Link
                            href="/register"
                            className="px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px]"
                        >
                            Create account
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ease-in-out transform hover:scale-[1.02]">
                                Access your company
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 transition-all duration-700 ease-in-out transform hover:translate-y-[-4px]">
                                Enter your workspace name to continue
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <span>Access your workspace</span>
                                </div>
                                <div className="flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <span>Secure and personalized access</span>
                                </div>
                                <div className="flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span>Automatic redirection to your system</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-[1.02]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="workspace" className="block text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out">
                                        Workspace name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="workspace"
                                            id="workspace"
                                            value={workspace}
                                            onChange={(e) => setWorkspace(e.target.value)}
                                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                                            placeholder="your-company"
                                            required
                                        />
                                    </div>
                                    {error && (
                                        <p className="mt-2 text-sm text-red-600">{error}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg"
                                >
                                    Continue
                                </button>

                                <div className="text-center">
                                    <p className="text-sm text-gray-500 transition-all duration-300 ease-in-out">
                                        Don&apos;t have an account?{' '}
                                        <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 ease-in-out transform hover:translate-x-1 inline-block">
                                            Sign up for free
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm; 