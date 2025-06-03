import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">InventorySystem</h3>
                        <p className="text-gray-400 transition-all duration-300 ease-in-out transform hover:translate-y-[-2px]">
                            The ultimate solution for your company's inventory management.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2 inline-block">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2 inline-block">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2 inline-block">
                                    Terms and conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 transition-all duration-300 ease-in-out transform hover:scale-105">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2 inline-block">
                                    Privacy policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:translate-x-2 inline-block">
                                    Cookie policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p className="transition-all duration-300 ease-in-out transform hover:scale-105">&copy; {new Date().getFullYear()} InventorySystem. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 