const benefits = [
    {
        title: 'Control total de productos',
        description: 'Gestiona tu inventario con precisión, desde la entrada hasta la salida de productos.',
        icon: '📦',
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: 'Acceso multiusuario',
        description: 'Colabora con tu equipo de forma segura y eficiente con diferentes niveles de acceso.',
        icon: '👥',
        color: 'from-purple-500 to-purple-600'
    },
    {
        title: 'Reportes en tiempo real',
        description: 'Toma decisiones informadas con datos actualizados y reportes personalizados.',
        icon: '📊',
        color: 'from-green-500 to-green-600'
    },
    {
        title: 'Integración sencilla',
        description: 'Conecta fácilmente con tus sistemas existentes y herramientas de e-commerce.',
        icon: '🔄',
        color: 'from-orange-500 to-orange-600'
    }
];

const Benefits = () => {
    return (
        <section id="features" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">
                        ¿Por qué elegir InventorySystem?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Descubre cómo nuestra plataforma puede transformar la gestión de tu inventario
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits; 