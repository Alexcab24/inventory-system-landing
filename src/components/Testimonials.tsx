import Link from 'next/link';

const AboutProject = () => {
    return (
        <section id="about" className="py-24 px-4 bg-gradient-to-b from-blue-50 via-white to-white relative overflow-hidden">
            <div className="container mx-auto flex flex-col items-center justify-center">
                <div className="relative bg-white/90 rounded-3xl shadow-2xl border border-blue-100 max-w-2xl w-full px-8 py-12 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-lg border-4 border-white">
                        <span className="text-4xl select-none">🚀</span>
                    </div>
                    <h2 className="text-4xl font-extrabold mb-4 text-gray-900 tracking-tight">
                        About this Project
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        <span className="font-semibold text-blue-700">InventorySystem</span> is a multi-tenant inventory management platform built as a personal and open project. My goal is to create a scalable, collaborative, and modern solution for real-world inventory challenges, and to share the journey and code with the community.
                    </p>
                    <div className="mb-8 text-base text-gray-600">
                        <p className="mb-3">
                            <span className="font-semibold text-blue-700">Why?</span> Because I believe inventory management should be accessible, flexible, and ready for the future. This project is a playground for learning, sharing, and building something useful for teams and companies of all sizes.
                        </p>
                        <p>
                            If you want to contribute, give feedback, or just say hi, feel free to reach out or check the code on GitHub!
                        </p>
                    </div>
                    <Link
                        href="https://github.com/Alexcab24/inventory-system"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all text-lg"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                        </svg>
                        Contribute on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutProject; 