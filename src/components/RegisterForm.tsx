'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        workspace: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        workspace: ''
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            email: '',
            workspace: ''
        };

        // Validar email
        if (!formData.email) {
            newErrors.email = 'El correo es requerido';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Ingresa un correo válido';
            isValid = false;
        }

        // Validar workspace
        if (!formData.workspace) {
            newErrors.workspace = 'El espacio de trabajo es requerido';
            isValid = false;
        } else if (!/^[a-z0-9-]+$/.test(formData.workspace)) {
            newErrors.workspace = 'Solo letras minúsculas, números y guiones';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validateForm()) {
            router.push(`/setup?email=${encodeURIComponent(formData.email)}&workspace=${encodeURIComponent(formData.workspace)}`);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
                            href="/login"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg"
                        >
                            Sign In
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
                                Start your free trial
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 transition-all duration-700 ease-in-out transform hover:translate-y-[-4px]">
                                Join thousands of companies already optimizing their inventory with InventorySystem
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>14-day free trial</span>
                                </div>
                                <div className="flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>No credit card required</span>
                                </div>
                                <div className="flex items-center gap-3 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-110">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span>24/7 support</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 ease-in-out transform hover:shadow-xl hover:scale-[1.02]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out">
                                        Company name
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="text"
                                            name="company"
                                            id="company"
                                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                                            placeholder="Your Company"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out">
                                        Work email
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                                            placeholder="you@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 transition-all duration-300 ease-in-out">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="block w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ease-in-out"
                                            required
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-lg"
                                >
                                    Start free trial
                                </button>

                                <p className="text-center text-sm text-gray-500 transition-all duration-300 ease-in-out">
                                    By signing up, you agree to our{' '}
                                    <Link href="/terms" className="text-blue-600 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:translate-x-1 inline-block">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700 transition-all duration-300 ease-in-out transform hover:translate-x-1 inline-block">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm; 