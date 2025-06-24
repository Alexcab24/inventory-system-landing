'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SetupContent() {
    const searchParams = useSearchParams();
    const email = searchParams.get('email');
    const workspace = searchParams.get('workspace');

    const handleNext = () => {
        window.location.href = `https://${workspace}.inventary-app-test.lat/auth/register?email=${encodeURIComponent(email || '')}&workspace=${workspace}`;
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
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            ¡Bienvenido a InventorySystem!
                        </h1>
                        <p className="text-xl text-gray-600">
                            Estamos preparando tu espacio de trabajo
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Detalles de la cuenta */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Detalles de tu cuenta
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Correo de la empresa</p>
                                        <p className="text-lg font-medium text-gray-900">{email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">URL de tu espacio de trabajo</p>
                                        <p className="text-lg font-medium text-blue-600">
                                            {workspace}.inventary-app-test.lat
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Estado de la configuración */}
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Preparando tu sistema
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Espacio de trabajo creado</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700">Formulario de registro listo</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </div>
                                        <span className="text-gray-400">Completando información de la empresa</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Información del siguiente paso */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                Siguiente paso: Completar información de la empresa
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Cuando estés listo, haz clic en el botón para continuar con el registro:
                            </p>
                            <div className="grid md:grid-cols-3 gap-6 mb-8">
                                <div className="p-6 bg-blue-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Información de la empresa</h3>
                                    <p className="text-gray-600">Nombre, dirección, teléfono y otros datos importantes</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Usuario administrador</h3>
                                    <p className="text-gray-600">Datos del usuario principal que gestionará el sistema</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-2">Configuración inicial</h3>
                                    <p className="text-gray-600">Preferencias básicas del sistema y configuración de seguridad</p>
                                </div>
                            </div>
                            <button
                                onClick={handleNext}
                                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Continuar con el registro
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function SetupPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        }>
            <SetupContent />
        </Suspense>
    );
} 