"use client";

import { useState } from "react";
import Logo from "./Logo";
import { Icons } from "./Icons";
import Image from "next/image";
export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
    };

    return (
        <footer className="bg-[#2D2520] text-white py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Logo className="w-12 h-16" />
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Updates from our team, written with love 🧡
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="flex-1 bg-[#3D3530] text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 placeholder:text-gray-500 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </form>
                        <div className="mt-6">
                            <Image src="/icons/DMCA.png" width={100} height={30} alt="DMCA Protected" className="h-8" />
                        </div>
                    </div>

                    <div>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">How it Works</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">All Apps</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Pricing</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Setapp for Teams</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Podcast</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Downjubet</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Support Links */}
                    <div>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Support</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Education Discount</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Family Plan</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">For Colleagues</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Gift Cards</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Redeem Card or Code</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Setapp Reviews</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Affiliate Program</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Mac Developer Survey 2023</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Getting started with Setapp</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Remote access to other Mac</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Fix macOS Ventura problems</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Best productivity apps</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Best YouTube downloaders</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Uninstall apps</a></li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-700 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
                        <p>© 2024 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14, Ireland. Reg: 584 945. VAT ID: IE3420011RH</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                            <a href="#" className="hover:bg-gray-600 transition-colors">
                                <Icons name="facebook" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:bg-gray-600 transition-colors">
                                <Icons name="twitter" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:bg-gray-600 transition-colors">
                                <Icons name="insta" className="w-6 h-6" />
                            </a>
                            <a href="#" className="hover:bg-gray-600 transition-colors">
                                <Icons name="youtube" className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
