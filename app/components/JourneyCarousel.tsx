"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Icons } from "./Icons";

interface JourneyCard {
    id: number;
    quote: string;
    author: string;
    image: string;
}

const journeyCards: JourneyCard[] = [
    {
        id: 1,
        quote: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
        author: "Jason Snaczek",
        image: "/icons/man.png"
    },
    {
        id: 2,
        quote: "Designers like Sarah leverage Setapp to streamline their workflow, focusing on what truly matters - creating amazing experiences.",
        author: "Sarah Mitchell",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80"
    },
    {
        id: 3,
        quote: "Developers like Mike use Setapp to boost productivity, automating repetitive tasks and spending more time coding.",
        author: "Mike Johnson",
        image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&q=80"
    },
    {
        id: 4,
        quote: "Content creators like Emma rely on Setapp to manage their creative tools, making content creation seamless and enjoyable.",
        author: "Emma Davis",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80"
    }
];

export default function JourneyCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (!isPlaying) return;

        // Random interval between 3-6 seconds
        const randomInterval = Math.floor(Math.random() * 3000) + 3000;

        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % journeyCards.length);
        }, randomInterval);

        return () => clearTimeout(timer);
    }, [currentIndex, isPlaying]);

    const handlePlayClick = () => {
        setIsPlaying(!isPlaying);
    };

    const handlePrevious = () => {
        setIsPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + journeyCards.length) % journeyCards.length);
    };

    const handleNext = () => {
        setIsPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % journeyCards.length);
    };

    const handleDotClick = (index: number) => {
        setIsPlaying(false);
        setCurrentIndex(index);
    };

    const currentCard = journeyCards[currentIndex];

    return (
        <section className="relative bg-linear-to-b w-full bg-background to-50% py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-0">
                        Your Setapp journey.
                    </h2>
                    <p className="text-lg max-w-md">
                        Type in your task into Setapp search and get instant app recommendations.
                    </p>
                </div>
                <div className="w-full h-px bg-gray-300 mb-12"></div>
                <div className="relative">
                    <div className="bg-[#765070] rounded-2xl p-8 md:p-12 lg:p-16 min-h-[400px] flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500">
                        <div className="flex-1 max-w-xl">
                            <p className="text-white text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                                {currentCard.quote}
                            </p>
                            <p className="text-white/80 text-sm">{currentCard.author}</p>

                            <button
                                onClick={handlePlayClick}
                                className="mt-8 w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg group"
                            >
                                {isPlaying ? (
                                    <div className="flex gap-1">
                                        <div className="w-1 h-4 bg-gray-800 rounded"></div>
                                        <div className="w-1 h-4 bg-gray-800 rounded"></div>
                                    </div>
                                ) : (
                                    <Icons name="play" className="text-gray-800 ml-1" width="13" height="16" />
                                )}
                            </button>
                        </div>

                        <div className="flex-1 flex justify-center md:justify-end ">
                            <div className="relative w-full max-w-md aspect-square md:-mb-16 -mb-8 ">
                                <Image
                                    src={currentCard.image}
                                    alt={currentCard.author}
                                    width={1200}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="absolute top-8 right-8 flex gap-3">
                            <button
                                onClick={handlePrevious}
                                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
                            >
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {journeyCards.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-gray-600 hover:bg-gray-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
