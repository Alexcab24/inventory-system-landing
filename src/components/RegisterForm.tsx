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
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all">
                            InventorySystem
                        </Link>
                        <Link
                            href="/login"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg"
                        >
                            Iniciar Sesión
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
                                Comienza tu prueba gratuita
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                Únete a miles de empresas que ya están optimizando su inventario con InventorySystem
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">14 días de prueba gratuita</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Sin tarjeta de crédito</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Soporte 24/7</span>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Correo de la empresa
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`appearance-none block w-full px-4 py-3 border ${errors.email ? 'border-red-300' : 'border-gray-300'
                                            } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                        placeholder="empresa@ejemplo.com"
                                    />
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                                    )}
                                </div>

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
                                            value={formData.workspace}
                                            onChange={handleChange}
                                            className={`appearance-none block w-full px-4 py-3 border ${errors.workspace ? 'border-red-300' : 'border-gray-300'
                                                } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                                            placeholder="mi-empresa"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">.inventorysystem.com</span>
                                        </div>
                                    </div>
                                    {errors.workspace && (
                                        <p className="mt-2 text-sm text-red-600">{errors.workspace}</p>
                                    )}
                                    <p className="mt-2 text-sm text-gray-500">
                                        Este será tu subdominio personalizado
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-lg"
                                >
                                    Comenzar prueba gratuita
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    Al registrarte, aceptas nuestros{' '}
                                    <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                                        Términos de servicio
                                    </Link>{' '}
                                    y{' '}
                                    <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                                        Política de privacidad
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