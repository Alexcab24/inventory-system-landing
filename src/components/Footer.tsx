import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">InventorySystem</h3>
                        <p className="text-gray-400">
                            La solución definitiva para la gestión de inventario de tu empresa.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                                    Sobre nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                                    Contacto
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                                    Términos y condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                                    Política de privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                                    Política de cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} InventorySystem. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 