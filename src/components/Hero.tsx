"use client";

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center starfield overflow-hidden"
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-purple-900/50 to-gray-900/80 z-10" />

            {/* Sacred geometry decorations */}
            <div className="absolute top-1/4 left-1/4 sacred-decoration opacity-30" />
            <div className="absolute bottom-1/4 right-1/4 sacred-decoration opacity-20" style={{ animationDirection: 'reverse' }} />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                <div className="animate-fade-in">
                    <span className="inline-block text-6xl md:text-8xl mb-6 animate-float">
                        ☽
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-slide-up floating-stars">
                    <span className="gradient-text drop-shadow-[0_0_30px_rgba(212,168,83,0.5)]">Thần Số Học</span>
                    <br />
                    <span className="text-cream-100 text-3xl md:text-5xl lg:text-6xl font-medium mt-4 block tracking-wide">
                        Giải mã con số, hiểu rõ chính mình
                    </span>
                </h1>

                <p className="text-cream-200 text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl mx-auto animate-slide-up font-medium tracking-wide" style={{ animationDelay: '0.2s' }}>
                    Từ ngày sinh & họ tên: khám phá tính cách, định hướng và thời vận.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                    <button
                        onClick={() => scrollToSection("#calculator")}
                        className="btn-glow sparkle-btn bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gray-900 font-bold px-10 py-5 rounded-full text-xl shadow-xl shadow-gold-500/40 hover:shadow-gold-500/60 transition-all transform hover:scale-110"
                    >
                        <span className="flex items-center justify-center gap-3">
                            <span className="text-2xl">✦</span>
                            Khám phá vận mệnh
                        </span>
                    </button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-6 h-6 text-cream-400 opacity-60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
