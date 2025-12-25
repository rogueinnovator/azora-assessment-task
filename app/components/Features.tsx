import Image from "next/image";
import JourneyCarousel from "./JourneyCarousel";
export default function Features() {
    return (
        <section className="bg-background text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What you get on Setapp.
                    </h2>
                    <p className="text-gray-400 text-lg">
                        With a single monthly subscription at $9.99, you get 240+ apps for your Mac.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                    <div className="lg:col-span-2 bg-[#DF96AE] rounded-3xl md:px-12 relative overflow-hidden w-full md:pt-[60px] pt-[60px]">
                        <div className="relative z-10 flex justify-start items-start gap-2">
                            <Image src="/icons/screen.png" alt="Monitor" width={1200} height={600} className="w-20 h-20" />
                            <div className="flex-col justify-between items-center">
                                <h3 className="text-3xl md:text-4xl font-bold mb-3">
                                    Keep your Mac clean
                                </h3>
                                <p className="text-white/90 text-lg mb-8">
                                    Remove junk, scan for malware, wipe email attachments
                                </p>
                            </div>

                        </div>
                        <div className="relative z-10">
                            <Image
                                src="/icons/smart-scan.png"
                                alt="Smart Scan Interface"
                                width={1200}
                                height={600}
                                className="w-full h-auto rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="bg-[#f5f1e8] rounded-3xl p-8 md:p-12 text-gray-900">

                        <div className="relative">
                            <Image
                                src="/icons/vs-code.png"
                                alt="Code Editor"
                                width={1200}
                                height={600}
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="mb-8 flex-col justify-start items-center">
                            <Image src="/icons/code.png" alt="Code Editor" width={1200} height={600} className="w-16 h-16" />
                            <h3 className="text-3xl font-bold my-3">Write code</h3>
                            <p className="text-gray-600 text-lg">
                                Create applications in more than 25 languages
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#384C75] rounded-3xl p-8 md:px-12">
                        <div className="mb-8 flex-col justify-between items-center">
                            <Image src="/icons/voice.png" alt="Voice" width={1200} height={600} className="w-16 h-16" />
                            <h3 className="text-3xl font-bold my-3">Join meetings in a click</h3>
                            <p className="text-white/90 text-lg">
                                Quickly access links to your meetings from menu bar
                            </p>
                        </div>
                        <div className="relative md:-bottom-[103px] -bottom-8">
                            <Image
                                src="/icons/meeter.png"
                                alt="Meeting Interface"
                                width={1200}
                                height={600}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>
                </div>

                {/* View all superpowers link */}
                <div className="text-center">
                    <button className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg font-medium">
                        <span>View all superpowers</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>

                {/* Journey Section */}
                <JourneyCarousel />

            </div>
        </section>
    );
}
