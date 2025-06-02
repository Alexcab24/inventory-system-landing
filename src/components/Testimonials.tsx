const testimonials = [
    {
        name: 'María González',
        role: 'CEO, TechStore',
        content: 'InventorySystem ha transformado completamente nuestra gestión de inventario. Ahora podemos rastrear cada producto en tiempo real.',
        avatar: '👩‍💼',
        company: 'TechStore'
    },
    {
        name: 'Carlos Rodríguez',
        role: 'Gerente de Operaciones, Distribuidora XYZ',
        content: 'La facilidad de uso y los reportes detallados nos han ayudado a reducir errores en un 40%. Una inversión que vale cada peso.',
        avatar: '👨‍💼',
        company: 'Distribuidora XYZ'
    },
    {
        name: 'Ana Martínez',
        role: 'Directora de Logística, E-commerce Plus',
        content: 'La integración con nuestra plataforma de e-commerce fue perfecta. Ahora tenemos un control total sobre nuestro inventario.',
        avatar: '👩‍💼',
        company: 'E-commerce Plus'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"></div>

            <div className="container mx-auto relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        Lo que dicen nuestros clientes
                    </h2>
                    <p className="text-xl text-gray-600">
                        Empresas que confían en nosotros para su gestión de inventario
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
                        >
                            <div className="absolute -top-4 left-8 w-8 h-8 bg-white transform rotate-45"></div>
                            <div className="relative">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 