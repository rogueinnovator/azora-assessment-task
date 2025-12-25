"use client";

import { useState } from "react";
import { Icons } from "./Icons";

interface Testimonial {
    id: number;
    text: string;
    author: string;
    handle: string;
    platform: "twitter" | "facebook" | "insta" | "youtube";
    bgColor: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "Have been using Setapp for about two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
        author: "Arash Pourhabibi",
        handle: "@ArashPourhabibi",
        platform: "twitter",
        bgColor: "bg-[#6B7B9E]"
    },
    {
        id: 2,
        text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
        author: "Mauricio Sanchez",
        handle: "@m4r1o",
        platform: "insta",
        bgColor: "bg-[#D4A574]"
    },
    {
        id: 3,
        text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
        author: "Meredith Sweet",
        handle: "@meredith.sweet.ullseidein",
        platform: "facebook",
        bgColor: "bg-[#7B5B7E]"
    },
    {
        id: 4,
        text: "Setapp has completely transformed how I work. Access to so many quality apps with one subscription is incredible!",
        author: "David Chen",
        handle: "@davidchen",
        platform: "youtube",
        bgColor: "bg-[#5B8B7E]"
    },
    {
        id: 5,
        text: "Best investment for my Mac productivity. The variety of apps available is outstanding and saves me so much money.",
        author: "Sarah Johnson",
        handle: "@sarahjohnson",
        platform: "twitter",
        bgColor: "bg-[#8B6B7E]"
    },
    {
        id: 6,
        text: "I can't imagine working without Setapp now. It's like having a Swiss Army knife of apps at your fingertips!",
        author: "Michael Brown",
        handle: "@michaelbrown",
        platform: "facebook",
        bgColor: "bg-[#7E8B6B]"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 3));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(testimonials.length - 3, prev + 3));
    };

    const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
    const totalPages = Math.ceil(testimonials.length / 3);
    const currentPage = Math.floor(currentIndex / 3);

    return (
        <section className="bg-[#F5F5F5] py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-background">
                            Setapp in your words.
                        </h2>
                        <p className="text-gray-600 text-lg">
                            What you say about how Setapp powers you up.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handlePrevious}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 bg-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all shadow-sm"
                        >
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= testimonials.length - 3}
                            className="w-12 h-12 bg-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-all shadow-sm"
                        >
                            <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className={`${testimonial.bgColor} p-8 min-h-[240px] flex items-center`}>
                                <p className="text-white text-lg leading-relaxed">
                                    {testimonial.text}
                                </p>
                            </div>

                            <div className="bg-white p-6 flex items-center justify-between">
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.handle}</p>
                                </div>

                                <div className="w-10 h-10 flex items-center justify-center">
                                    <Icons name={testimonial.platform} width="24" height="24" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index * 3)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentPage ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
