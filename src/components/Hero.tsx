import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto text-center relative">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight transition-all duration-700 ease-in-out transform hover:scale-[1.02]">
                        Manage your inventory without complications
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay leading-relaxed transition-all duration-700 ease-in-out transform hover:translate-y-[-4px]">
                        The ultimate solution for businesses looking to optimize their inventory management.
                        Simple, efficient, and designed to grow with you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
                        <Link
                            href="/register"
                            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                        >
                            Register your company for free
                        </Link>
                        {/* <Link
                            href="#demo"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all"
                        >
                            View demo
                        </Link> */}
                    </div>
                    <div className="mt-12 flex justify-center items-center gap-8 text-gray-500">
                        <div className="flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                            <svg className="w-5 h-5 text-green-500 transition-transform duration-300 ease-in-out transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>14-day free trial</span>
                        </div>
                        <div className="flex items-center gap-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700">
                            <svg className="w-5 h-5 text-green-500 transition-transform duration-300 ease-in-out transform hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>No credit card required</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 