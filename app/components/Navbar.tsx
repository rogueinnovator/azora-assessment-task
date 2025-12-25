'use client';
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Link from "next/link";
import { Icons } from "./Icons";

export default function Navbar() {
    const currentpath = usePathname();
    console.log(currentpath, "addd");

    const Links = [
        { href: "/how-it-works", label: "How it works" },
        { href: "/all-apps", label: "All apps" },
        { href: "/pricing", label: "Pricing" },
        { href: "/for-teams", label: "For Teams" },
        { href: "/blog", label: "Blog" },
        { href: "/podcast", label: "Podcast" },
    ];
    return (
        <nav className="fixed top-0 bg-background rounded-2xl left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto w-full">
            <div className="flex items-center">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo className="w-8 h-12" />
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8">
                {Links.map((link) => (
                    <Link href={link.href} key={link.href} className={currentpath === link.href ? "text-sm font-medium text-gray-300 hover:text-white transition-colors" : "text-sm font-medium text-gray-300 hover:text-white transition-colors"}>{link.label}</Link>
                ))}
                <div className="h-4 w-px bg-gray-600 mx-2"></div>
                <Icons name="flag" className="w-6 h-4" />
                <Link href="/sign-in" className="text-sm font-medium text-gray-300 hover:text-white transition-colors ml-4">Sign In</Link>
                <Link href="/try-free" className="text-sm font-medium text-white border border-gray-600 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors ml-2">Try free</Link>
            </div>

            <button className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </nav>
    );
}
