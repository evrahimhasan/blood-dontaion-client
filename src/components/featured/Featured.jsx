import React from 'react';

const Featured = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-red-600 mb-16 drop-shadow-md">
                    Why Donate Blood?
                </h2>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition hover:-translate-y-3 hover:shadow-2xl">
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-red-600">
                            <img
                                src="https://i.ibb.co.com/dwpWjYCF/pic6.jpg"
                                alt="Save Lives"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-red-700">One Donation Can Save Up to 3 Lives</h3>
                        <p className="text-gray-700">
                            Your single blood donation can help multiple patients in emergencies, surgeries, and treatments.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition hover:-translate-y-3 hover:shadow-2xl">
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-red-600">
                            <img
                                src="https://i.ibb.co.com/BHq66Xfc/pic5.jpg"
                                alt="In Demand"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-red-700">Constant Need for All Blood Types</h3>
                        <p className="text-gray-700">
                            Hospitals need blood every day. Especially O- and AB types for universal donations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform transition hover:-translate-y-3 hover:shadow-2xl">
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-red-600">
                            <img
                                src="https://i.ibb.co.com/LXNprsWB/pic4.jpg"
                                alt="Quick Process"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold mb-4 text-red-700">Quick & Painless Process</h3>
                        <p className="text-gray-700">
                            Donating takes about an hour, with minimal discomfort, and you get free health checks!
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-6 rounded-3xl shadow-lg">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div className="transform transition hover:scale-105">
                            <h3 className="text-4xl sm:text-5xl font-bold">100,000+</h3>
                            <p className="text-lg mt-2">Registered Donors</p>
                        </div>
                        <div className="transform transition hover:scale-105">
                            <h3 className="text-4xl sm:text-5xl font-bold">50,000+</h3>
                            <p className="text-lg mt-2">Lives Saved</p>
                        </div>
                        <div className="transform transition hover:scale-105">
                            <h3 className="text-4xl sm:text-5xl font-bold">Every 2 Seconds</h3>
                            <p className="text-lg mt-2">Someone Needs Blood</p>
                        </div>
                        <div className="transform transition hover:scale-105">
                            <h3 className="text-4xl sm:text-5xl font-bold">1 Hour</h3>
                            <p className="text-lg mt-2">To Donate & Make a Difference</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;