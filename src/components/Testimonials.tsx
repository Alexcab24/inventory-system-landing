const testimonials = [
    {
        name: 'Mary Gonzalez',
        role: 'CEO, TechStore',
        content: 'InventorySystem has completely transformed our inventory management. We can now track every product in real-time.',
        avatar: '👩‍💼',
        company: 'TechStore'
    },
    {
        name: 'Carl Rodriguez',
        role: 'Operations Manager, Distributor XYZ',
        content: 'The ease of use and detailed reports have helped us reduce errors by 40%. An investment worth every penny.',
        avatar: '👨‍💼',
        company: 'Distributor XYZ'
    },
    {
        name: 'Ann Martinez',
        role: 'Logistics Director, E-commerce Plus',
        content: 'The integration with our e-commerce platform was perfect. We now have total control over our inventory.',
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
                        What our clients say
                    </h2>
                    <p className="text-xl text-gray-600">
                        Companies that trust us for their inventory management
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