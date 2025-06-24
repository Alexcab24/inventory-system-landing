import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105">
                        InventorySystem
                    </Link>
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]">
                            Features
                        </Link>
                        <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]">
                            Testimonials
                        </Link>
                        {/* <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]">
                            Pricing
                        </Link> */}
                        <Link
                            href="/login"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out hover:shadow-lg transform hover:scale-105 hover:translate-y-[-2px]"
                        >
                            Sign In
                        </Link>
                    </nav>
                    <button className="md:hidden text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-110">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header; 