"use client";

import { useEffect, useRef } from "react";
import { karmicDebts, karmicDebtIntro, getKarmicActivationAdvice, KarmicDebt } from "@/lib/karmicDebt";

interface KarmicDebtSectionProps {
    lifePath?: number;
    personalYear?: number;
}

export default function KarmicDebtSection({ lifePath, personalYear }: KarmicDebtSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Lấy lời khuyên về thời điểm kích hoạt
    const activationAdvice = personalYear ? getKarmicActivationAdvice(personalYear) : null;

    // Lấy danh sách nợ nghiệp để hiển thị
    const karmicDebtList = Object.values(karmicDebts);

    return (
        <section ref={sectionRef} id="karmic-debt" className="py-20 px-4 bg-transparent">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">🔮 {karmicDebtIntro.title}</span>
                    </h2>
                    <p className="text-lavender-400 text-xl mb-4">{karmicDebtIntro.subtitle}</p>
                    <p className="text-cream-300 text-lg max-w-3xl mx-auto leading-relaxed">
                        {karmicDebtIntro.description}
                    </p>
                </div>

                {/* Lời khuyên về thời điểm kích hoạt */}
                {activationAdvice && (
                    <div className="animate-on-scroll mb-12">
                        <div className="glass rounded-2xl p-6 border border-orange-500/30 bg-orange-500/5">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">⏰</span>
                                <div>
                                    <h4 className="text-lg font-bold text-orange-400 mb-2">
                                        Lời khuyên chiến lược về tính thời điểm
                                    </h4>
                                    <p className="text-cream-200">{activationAdvice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Karmic Debt Cards */}
                <div className="space-y-8">
                    {karmicDebtList.map((debt, index) => (
                        <KarmicDebtCard
                            key={debt.number}
                            debt={debt}
                            index={index}
                            isRelevant={lifePath !== undefined && debt.activationYears.includes(lifePath)}
                        />
                    ))}
                </div>

                {/* Footer message */}
                <div className="animate-on-scroll mt-12 text-center">
                    <div className="glass rounded-2xl p-6 border border-lavender-500/30">
                        <p className="text-cream-200 text-lg italic">
                            "Việc nhận diện nợ nghiệp chính là bước đầu tiên để bạn từ vai trò <span className="text-lavender-400 font-semibold">'nạn nhân'</span> của số phận trở thành người <span className="text-gold-400 font-semibold">'chinh phục'</span> cuộc đời mình."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function KarmicDebtCard({ debt, index, isRelevant }: { debt: KarmicDebt; index: number; isRelevant: boolean }) {
    const colors = [
        { bg: "from-purple-500/20 to-purple-600/10", border: "border-purple-500/30", accent: "text-purple-400" },
        { bg: "from-blue-500/20 to-blue-600/10", border: "border-blue-500/30", accent: "text-blue-400" },
        { bg: "from-green-500/20 to-green-600/10", border: "border-green-500/30", accent: "text-green-400" },
        { bg: "from-orange-500/20 to-orange-600/10", border: "border-orange-500/30", accent: "text-orange-400" },
    ];
    const color = colors[index % colors.length];

    return (
        <div
            className={`animate-on-scroll glass rounded-3xl p-6 md:p-8 border ${color.border} ${isRelevant ? 'ring-2 ring-gold-500/50' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${color.bg} flex items-center justify-center border ${color.border}`}>
                    <span className={`text-2xl font-bold ${color.accent}`}>{debt.number}</span>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-cream-100">{debt.title}</h3>
                    <p className={`text-lg ${color.accent}`}>{debt.subtitle}</p>
                    {isRelevant && (
                        <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium">
                            ✨ Liên quan đến Số Chủ Đạo của bạn
                        </span>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-cream-200 mb-6 leading-relaxed">{debt.description}</p>

            {/* Origin */}
            <div className="mb-6 p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <h4 className="font-semibold text-lavender-400 mb-2 flex items-center gap-2">
                    <span>🌌</span> Nguồn gốc tâm linh
                </h4>
                <p className="text-cream-300 text-sm">{debt.origin}</p>
            </div>

            {/* Behaviors */}
            <div className="mb-6">
                <h4 className="font-semibold text-cream-100 mb-3 flex items-center gap-2">
                    <span>🧠</span> Biểu hiện tâm lý hành vi
                </h4>
                <ul className="space-y-2">
                    {debt.behaviors.map((behavior, i) => (
                        <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                            <span className="text-orange-400 mt-1">•</span>
                            {behavior}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Solutions */}
            <div>
                <h4 className="font-semibold text-cream-100 mb-4 flex items-center gap-2">
                    <span>💡</span> Giải pháp khai vấn (Actionable Insights)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {debt.solutions.map((solution, i) => (
                        <div
                            key={i}
                            className={`p-4 rounded-xl bg-gradient-to-br ${color.bg} border ${color.border}`}
                        >
                            <h5 className={`font-semibold ${color.accent} mb-2`}>{solution.title}</h5>
                            <p className="text-cream-300 text-sm">{solution.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
