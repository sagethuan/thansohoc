"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Trang chủ" },
        { href: "#indices", label: "Chỉ số" },
        { href: "#calculator", label: "Công cụ" },
        { href: "#contact", label: "Liên hệ" },
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-gray-900/95 backdrop-blur-md shadow-lg"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#home");
                        }}
                        className="flex items-center gap-2 group"
                    >
                        <span className="text-3xl">☽✧</span>
                        <span className="font-bold text-xl md:text-2xl gradient-text group-hover:opacity-80 transition-opacity">
                            Thần Số Học
                        </span>
                        <span className="hidden sm:inline text-cream-300 text-base">
                            – Khám phá bản thân
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="text-cream-200 hover:text-gold-400 transition-colors text-base font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={() => scrollToSection("#calculator")}
                            className="btn-glow bg-gradient-to-r from-lavender-600 to-gold-500 px-5 py-2.5 rounded-full text-white text-base font-semibold hover:shadow-lg hover:shadow-lavender-500/30 transition-all"
                        >
                            ✦ Tính chỉ số ngay
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-cream-200 hover:text-gold-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <nav className="bg-gray-900/95 backdrop-blur-md px-4 py-4 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(link.href);
                            }}
                            className="block py-2 px-4 text-cream-200 hover:text-gold-400 hover:bg-white/5 rounded-lg transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => scrollToSection("#calculator")}
                        className="w-full mt-2 btn-glow bg-gradient-to-r from-lavender-600 to-gold-500 px-4 py-3 rounded-full text-white font-semibold"
                    >
                        ✦ Tính chỉ số ngay
                    </button>
                </nav>
            </div>
        </header>
    );
}
