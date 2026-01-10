import React from 'react';
import { FaHandsHelping, FaHeartbeat } from 'react-icons/fa';
import { FaRegLightbulb, FaUsers } from 'react-icons/fa6';

const AboutUs = () => {
    const aboutPoints = [
        {
            icon: <FaHandsHelping className="text-red-600 w-10 h-10 mb-4" />,
            title: "Connecting Donors & Patients",
            description:
                "Our platform bridges the gap between blood donors and patients in need, ensuring timely donations.",
        },
        {
            icon: <FaUsers className="text-red-600 w-10 h-10 mb-4" />,
            title: "User-Friendly Experience",
            description:
                "Seamless registration and navigation makes it easy for donors to participate and manage donations.",
        },
        {
            icon: <FaHeartbeat className="text-red-600 w-10 h-10 mb-4" />,
            title: "Efficient Donation Process",
            description:
                "The application streamlines blood donation requests, scheduling, and management for maximum impact.",
        },
        {
            icon: <FaRegLightbulb className="text-red-600 w-10 h-10 mb-4" />,
            title: "Role-Based Access Control",
            description:
                "Admins, managers, and users have defined roles to ensure smooth operation and security.",
        },
    ];
    return (
        <section className="bg-white">
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-red-600 mb-16 drop-shadow-md">
                    About Us
                </h2>

                {/* Objective / Intro Text */}
                <p className="text-center text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto mb-12">
                    The Blood Donation Application is a user-friendly platform that facilitates blood donation activities.
                    It connects donors with those in need, promoting a seamless and efficient donation process.
                </p>

                {/* Features / Points */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {aboutPoints.map((point, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 rounded-2xl shadow-xl p-8 text-center transform transition hover:-translate-y-3 hover:shadow-2xl"
                        >
                            {/* Icon */}
                            {point.icon}

                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-4 text-red-700">{point.title}</h3>

                            {/* Description */}
                            <p className="text-gray-700">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;