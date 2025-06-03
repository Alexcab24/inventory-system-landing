const benefits = [
    {
        title: 'Total product control',
        description: 'Manage your inventory with precision, from product entry to exit.',
        icon: '📦',
        color: 'from-blue-500 to-blue-600'
    },
    {
        title: 'Multi-user access',
        description: 'Collaborate with your team securely and efficiently with different access levels.',
        icon: '👥',
        color: 'from-purple-500 to-purple-600'
    },
    {
        title: 'Real-time reports',
        description: 'Make informed decisions with updated data and customized reports.',
        icon: '📊',
        color: 'from-green-500 to-green-600'
    },
    {
        title: 'Easy integration',
        description: 'Connect easily with your existing systems and e-commerce tools.',
        icon: '🔄',
        color: 'from-orange-500 to-orange-600'
    }
];

const Benefits = () => {
    return (
        <section id="features" className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 transition-all duration-700 ease-in-out transform hover:scale-[1.02]">
                        Why choose InventorySystem?
                    </h2>
                    <p className="text-xl text-gray-600 transition-all duration-700 ease-in-out transform hover:translate-y-[-4px]">
                        Discover how our platform can transform your inventory management
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02]"
                        >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-in-out`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-all duration-300 ease-in-out">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed transition-all duration-300 ease-in-out group-hover:text-gray-700">
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