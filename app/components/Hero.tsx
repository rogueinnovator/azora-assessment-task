import { Icons } from "./Icons";
import Logo from "./Logo";

const Hero = () => {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4 sm:px-6 md:px-8 animate-fade-in-up">
                <div className="mb-6 md:mb-8 p-4 md:p-6 bg-black rounded-2xl md:rounded-3xl shadow-2xl border border-white/5">
                    <Logo className="w-12 h-18 md:w-16 md:h-24" />
                </div>

                <h1 className="main-text mb-4">
                    Dozens of apps.<br />
                    One subscription.<br />
                    $9.99
                </h1>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 md:mt-8">
                    <button className="bg-white text-black font-semibold text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer w-full sm:w-auto">
                        Try free for 7 days
                    </button>
                    <div className="flex gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                            <Icons name="apple" className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                            <Icons name="google" className="w-5 h-5 sm:w-7 sm:h-7" />
                        </div>

                    </div>
                </div>

                <p className="mt-6 md:mt-8 text-gray-400 text-sm sm:text-base px-4 sm:px-12 md:px-24 lg:px-72">
                    Power up your workflow with Setapp, a smart way to get apps.
                </p>
            </div>

            <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">

                {/* Left Side Stickers */}
                <div className="absolute top-[28%] left-[2%] sm:left-[5%] md:left-[12%] w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 bg-sticker-orange rounded-2xl transform rotate-28 flex items-center justify-center p-2 sm:p-4 text-center text-[#6e3a24] font-bold text-lg sm:text-2xl">
                    WORK<br />WITH<br />PICS
                    <div className="absolute -bottom-8 sm:-bottom-11 -left-1 w-10 h-10 sm:w-14 sm:h-14 bg-sticker-pink rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-black">
                        <Icons name="coil" className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                </div>
                <Icons name="pdf-blocker" className="absolute top-[42%] left-[2%] sm:left-[17%] md:left-[13%] w-24 h-24 sm:w-36 sm:h-36 md:w-36 md:h-36" />

                <Icons name="boost-team-work" className="absolute top-[52%] left-[1%] sm:left-[5%] md:left-[10%] -rotate-6 flex w-40 sm:w-60 h-40 sm:h-60" />
                <div className="absolute top-[70%] left-[2%] sm:left-[5%] md:left-[12%] w-24 h-24 sm:w-32 sm:h-32 bg-sticker-mint rounded-2xl transform rotate-12 flex items-center justify-center">
                    <span className="text-emerald-800 font-bold text-sm sm:text-lg text-center leading-tight">STAY<br />SECURE</span>
                </div>
                {/* Right Side Stickers */}``

                <div className="absolute top-[26%] right-[2%] sm:right-[5%] md:right-[15%] w-28 h-12 sm:w-40 sm:h-16 bg-sticker-peach rounded-xl transform rotate-12 flex items-center justify-center">
                    <span className="text-orange-900/80 font-bold text-base sm:text-xl uppercase">FIX WIFI</span>
                </div>

                <div className="absolute top-[32%] right-[5%] sm:right-[10%] md:right-[20%] w-24 h-24 sm:w-32 sm:h-32 bg-sticker-blue rounded-3xl transform -rotate-18 flex items-center justify-center text-center p-2 ">
                    <span className="text-sky-900 font-bold text-lg sm:text-2xl leading-tight">PLAN<br />YOUR<br />DAY</span>
                </div>

                <div className="absolute top-[60%] right-[1%] sm:right-[2%] md:right-[15%] w-40 h-20 sm:w-56 sm:h-24 bg-sticker-pink rounded-xl transform rotate-8 flex items-center justify-center text-center">
                    <span className="text-[#844461] font-bold text-lg sm:text-2xl uppercase">Manage<br />Your Mac</span>
                </div>

                <Icons name="convert-to-jpeg" className="w-32 h-32 sm:w-44 sm:h-43 absolute top-[43%] right-[5%] sm:right-[10%] md:right-[13%]" />
                <div className="absolute top-[70%] right-[3%] sm:right-[8%] md:right-[15%] w-24 h-24 sm:w-32 sm:h-32 bg-sticker-orange rounded-2xl transform -rotate-12 flex items-center justify-center">
                    <span className="text-[#6e3a24] font-bold text-base sm:text-xl text-center leading-tight">CODE<br />EASIER</span>
                </div>

            </div>

            <div className="absolute bottom-8 sm:bottom-12 w-3/4 h-px bg-white/20"></div>
        </section >
    );
};
export default Hero;;
