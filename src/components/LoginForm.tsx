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
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all">
                            InventorySystem
                        </Link>
                        <Link
                            href="/register"
                            className="px-6 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
                        >
                            Crear cuenta
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
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Accede a tu empresa
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Ingresa el nombre de tu espacio de trabajo para continuar
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Accede a tu espacio de trabajo</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Acceso seguro y personalizado</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Redirección automática a tu sistema</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="workspace" className="block text-sm font-medium text-gray-700 mb-1">
                                        Espacio de trabajo
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="workspace"
                                            name="workspace"
                                            type="text"
                                            required
                                            value={workspace}
                                            onChange={(e) => setWorkspace(e.target.value)}
                                            className={`appearance-none block w-full px-4 py-3 border ${error ? 'border-red-300' : 'border-gray-300'
                                                } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                            placeholder="mi-empresa"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">.inventorysystem.com</span>
                                        </div>
                                    </div>
                                    {error && (
                                        <p className="mt-2 text-sm text-red-600">{error}</p>
                                    )}
                                    <p className="mt-2 text-sm text-gray-500">
                                        Este es el nombre de tu espacio de trabajo
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-lg"
                                >
                                    Continuar
                                </button>

                                <div className="text-center">
                                    <p className="text-sm text-gray-500">
                                        ¿No tienes una cuenta?{' '}
                                        <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                                            Regístrate gratis
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