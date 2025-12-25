import Logo from "./Logo";

export default function SuperpowerCard() {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-[#F5F5F5] rounded-3xl p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col items-start max-w-2xl">
                        <div className="mb-8">
                            <Logo className="w-12 h-16 md:w-16 md:h-20" />
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Superpowers starting $9.99/month.
                        </h2>
                        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                            Free for 7 days.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                Get started now
                            </button>
                            <button className="bg-transparent text-gray-900 font-semibold px-8 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                                More about Setapp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
