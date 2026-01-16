"use client";

import { useState, useRef, useEffect } from "react";
import { calculateAllNumbers, formatResultForCopy, NumerologyResult } from "@/lib/numerology";
import { getMeaning, getMeaningByType, IndicatorType, NumberMeaning } from "@/lib/numerologyMeanings";
import { getLifePathAnalysis } from "@/lib/lifePathAnalysis";
import { karmicDebts, karmicDebtIntro, getKarmicActivationAdvice, KarmicDebt } from "@/lib/karmicDebt";

// Config cho 6 chỉ số
const indicatorConfig: Array<{
    key: keyof NumerologyResult;
    type: IndicatorType;
    name: string;
    english: string;
    color: string;
    icon: string;
}> = [
        { key: 'lifePath', type: 'lifePath', name: 'Số Chủ Đạo', english: 'Life Path', color: 'from-gold-400 to-gold-600', icon: '☉' },
        { key: 'expression', type: 'expression', name: 'Số Sứ Mệnh', english: 'Expression', color: 'from-lavender-400 to-lavender-600', icon: '♃' },
        { key: 'soulUrge', type: 'soulUrge', name: 'Số Linh Hồn', english: 'Soul Urge', color: 'from-pink-400 to-pink-600', icon: '♆' },
        { key: 'personality', type: 'personality', name: 'Số Nhân Cách', english: 'Personality', color: 'from-blue-400 to-blue-600', icon: '♀' },
        { key: 'birthday', type: 'birthday', name: 'Số Ngày Sinh', english: 'Birthday', color: 'from-green-400 to-green-600', icon: '☽' },
        { key: 'personalYear', type: 'personalYear', name: 'Năm Cá Nhân', english: 'Personal Year', color: 'from-orange-400 to-orange-600', icon: '♂' },
    ];

// Modal Component
function DetailModal({
    isOpen,
    onClose,
    indicator,
    number,
    meaning
}: {
    isOpen: boolean;
    onClose: () => void;
    indicator: typeof indicatorConfig[0] | null;
    number: number;
    meaning: NumberMeaning | null;
}) {
    if (!isOpen || !indicator || !meaning) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto glass rounded-3xl p-6 md:p-8 border border-gold-500/30 animate-fade-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-cream-400 hover:text-white transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${indicator.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                        {number}
                    </div>
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-cream-100">{indicator.name}</h3>
                        <p className="text-lavender-400">{indicator.english}</p>
                    </div>
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold text-gold-400 mb-4">{meaning.title}</h4>

                {/* Description */}
                {meaning.description && (
                    <p className="text-cream-200 mb-6 leading-relaxed">{meaning.description}</p>
                )}

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {meaning.keywords.map((keyword, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-lavender-500/20 text-lavender-300 text-sm font-medium"
                        >
                            {keyword}
                        </span>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {/* Strengths */}
                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                        <h5 className="font-semibold text-green-400 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Điểm mạnh
                        </h5>
                        <ul className="space-y-2">
                            {meaning.strengths.map((s, i) => (
                                <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                    <span className="text-green-400 mt-1">•</span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Challenges */}
                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        <h5 className="font-semibold text-orange-400 mb-3 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            Thách thức
                        </h5>
                        <ul className="space-y-2">
                            {meaning.challenges.map((c, i) => (
                                <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                    <span className="text-orange-400 mt-1">•</span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Advice */}
                <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-center">
                    <h5 className="font-semibold text-gold-400 mb-2 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Lời khuyên
                    </h5>
                    <p className="text-cream-200 italic">"{meaning.advice}"</p>
                </div>
            </div>
        </div>
    );
}

export default function Calculator() {
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState<NumerologyResult | null>(null);
    const [errors, setErrors] = useState<{ name?: string; dob?: string }>({});
    const [copySuccess, setCopySuccess] = useState(false);

    // Karmic Debt toggle state
    const [showKarmicDebt, setShowKarmicDebt] = useState(false);

    // Modal state
    const [selectedIndicator, setSelectedIndicator] = useState<typeof indicatorConfig[0] | null>(null);

    const resultRef = useRef<HTMLDivElement>(null);
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

    const validateForm = () => {
        const newErrors: { name?: string; dob?: string } = {};
        if (!name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
        if (!dob) newErrors.dob = "Vui lòng chọn ngày sinh";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 300));

        const allNumbers = calculateAllNumbers(name, dob);
        setResult(allNumbers);
        setIsLoading(false);

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    };

    const handleCopyResult = async () => {
        if (!result) return;
        const text = formatResultForCopy(name, result);
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    const handleIndicatorClick = (indicator: typeof indicatorConfig[0]) => {
        setSelectedIndicator(indicator);
    };

    const selectedNumber = selectedIndicator && result ? result[selectedIndicator.key] as number : 0;
    const selectedMeaning = selectedIndicator ? getMeaningByType(selectedIndicator.type, selectedNumber as number) : null;

    return (
        <>
            <section
                ref={sectionRef}
                id="calculator"
                className="py-20 px-4 bg-transparent"
            >
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 animate-on-scroll">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            <span className="gradient-text">Công cụ tính nhanh</span>
                        </h2>
                        <p className="text-cream-300 text-lg">
                            Nhập thông tin để khám phá các chỉ số thần số học của bạn
                        </p>
                    </div>

                    {/* Calculator Form */}
                    <div className="animate-on-scroll glass rounded-3xl p-8 mb-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-cream-200 font-medium mb-2">
                                        Họ và tên <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (errors.name) setErrors({ ...errors, name: undefined });
                                        }}
                                        placeholder="Ví dụ: Nguyễn Văn A"
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.name ? "border-red-500" : "border-gray-600"} text-cream-100 placeholder-gray-500 focus:border-lavender-500 transition-colors`}
                                    />
                                    {errors.name && (
                                        <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="dob" className="block text-cream-200 font-medium mb-2">
                                        Ngày sinh <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        value={dob}
                                        onChange={(e) => {
                                            setDob(e.target.value);
                                            if (errors.dob) setErrors({ ...errors, dob: undefined });
                                        }}
                                        className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.dob ? "border-red-500" : "border-gray-600"} text-cream-100 focus:border-lavender-500 transition-colors`}
                                    />
                                    {errors.dob && (
                                        <p className="mt-2 text-red-400 text-sm flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {errors.dob}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="btn-glow bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-gray-900 font-bold px-12 py-4 rounded-full text-lg shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin" />
                                            Đang tính...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            Tính ngay
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Result Display */}
                    {result && (
                        <div ref={resultRef} className="animate-fade-in space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-cream-100 mb-2">
                                    Kết quả cho <span className="text-gold-400">{name}</span>
                                </h3>
                            </div>

                            <div className="glass rounded-3xl p-8 border border-gold-500/30">
                                <div className="text-center mb-8">
                                    <h4 className="text-2xl md:text-3xl font-bold mb-2">
                                        <span className="gradient-text">Các chỉ số nổi bật</span>
                                    </h4>
                                    <p className="text-cream-300 text-lg">
                                        Khám phá 6 chỉ số quan trọng nhất giúp bạn hiểu rõ về bản thân
                                    </p>
                                    <p className="text-lavender-400 text-sm mt-2">
                                        👆 Click vào từng chỉ số để xem phân tích chi tiết
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                                    {indicatorConfig.map((indicator) => (
                                        <button
                                            key={indicator.key}
                                            onClick={() => handleIndicatorClick(indicator)}
                                            className="group p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50 hover:border-gold-500/50 transition-all hover:bg-gray-800/50 cursor-pointer text-left"
                                        >
                                            <div className="flex flex-col items-center text-center">
                                                <div
                                                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${indicator.color} flex items-center justify-center text-white font-bold text-xl shadow-lg mb-3 group-hover:scale-110 transition-transform`}
                                                >
                                                    {result[indicator.key]}
                                                </div>
                                                <h5 className="text-cream-100 font-semibold text-sm mb-1">
                                                    {indicator.name}
                                                </h5>
                                                <p className="text-lavender-400 text-xs">
                                                    {indicator.english}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* 4 MỤC PHÂN TÍCH CHI TIẾT */}
                                {(() => {
                                    const meaning = getMeaning(result.lifePath);
                                    const analysis = getLifePathAnalysis(result.lifePath);
                                    if (!meaning || !analysis) return null;

                                    return (
                                        <div className="space-y-6 mt-8 pt-8 border-t border-gray-700/50">
                                            {/* 1. Hiểu điểm mạnh - điểm yếu */}
                                            <div className="glass rounded-2xl p-6">
                                                <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                                                    <span className="text-2xl">💪</span>
                                                    Hiểu điểm mạnh – điểm yếu
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                                                        <h5 className="font-semibold text-green-400 mb-3">✅ Điểm mạnh</h5>
                                                        <ul className="space-y-2">
                                                            {meaning.strengths.map((s, i) => (
                                                                <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                                                    <span className="text-green-400">•</span> {s}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                                        <h5 className="font-semibold text-orange-400 mb-3">⚠️ Điểm yếu cần cải thiện</h5>
                                                        <ul className="space-y-2">
                                                            {meaning.challenges.map((c, i) => (
                                                                <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                                                    <span className="text-orange-400">•</span> {c}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 2. Định hướng công việc - mối quan hệ */}
                                            <div className="glass rounded-2xl p-6">
                                                <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                                                    <span className="text-2xl">🎯</span>
                                                    Định hướng công việc – mối quan hệ
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                                                        <h5 className="font-semibold text-blue-400 mb-3">💼 Công việc phù hợp</h5>
                                                        <ul className="space-y-2">
                                                            {analysis.career.map((c, i) => (
                                                                <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                                                    <span className="text-blue-400">•</span> {c}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
                                                        <h5 className="font-semibold text-pink-400 mb-3">💕 Mối quan hệ</h5>
                                                        <ul className="space-y-2">
                                                            {analysis.relationships.map((r, i) => (
                                                                <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                                                    <span className="text-pink-400">•</span> {r}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 3. Chu kỳ năm cá nhân */}
                                            <div className="glass rounded-2xl p-6">
                                                <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                                                    <span className="text-2xl">📅</span>
                                                    Chu kỳ năm cá nhân {new Date().getFullYear()}
                                                </h4>
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                                                        {result.personalYear}
                                                    </div>
                                                    <div>
                                                        <p className="text-cream-200 text-lg">{analysis.yearCycleAdvice}</p>
                                                    </div>
                                                </div>
                                                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                                                    <p className="text-cream-300 text-sm">
                                                        <strong className="text-lavender-400">Gợi ý:</strong> Chu kỳ 9 năm bắt đầu từ năm 1 (khởi đầu) đến năm 9 (hoàn thành).
                                                        Năm cá nhân {result.personalYear} của bạn cho thấy năng lượng chủ đạo trong năm nay.
                                                    </p>
                                                </div>
                                            </div>

                                            {/* 4. Lời khuyên dễ áp dụng */}
                                            <div className="glass rounded-2xl p-6">
                                                <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                                                    <span className="text-2xl">💡</span>
                                                    Lời khuyên dễ áp dụng
                                                </h4>
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                    {analysis.practicalTips.map((tip, i) => (
                                                        <div key={i} className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 text-center">
                                                            <span className="text-3xl mb-2 block">{['🌅', '🧘', '🎯'][i] || '✨'}</span>
                                                            <p className="text-cream-200 text-sm">{tip}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-4 p-4 rounded-xl bg-lavender-500/10 border border-lavender-500/20 text-center">
                                                    <p className="text-cream-200 italic">"{meaning.advice}"</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {/* 5. Nợ Nghiệp (Karmic Debt) - hiển thị nếu phát hiện trong quá trình tính */}
                                {result.karmicDebts.length > 0 && (
                                    <div className="glass rounded-2xl p-6 border border-purple-500/30 mt-6">
                                        {/* Nút bấm để toggle hiển thị */}
                                        <button
                                            onClick={() => setShowKarmicDebt(!showKarmicDebt)}
                                            className="w-full flex items-center justify-between gap-3 text-left"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-2xl">🔮</span>
                                                <div>
                                                    <h4 className="text-xl font-bold text-cream-100">{karmicDebtIntro.title}</h4>
                                                    <p className="text-lavender-400 text-sm">
                                                        Bấm để xem {result.karmicDebts.length} nợ nghiệp của bạn: {result.karmicDebts.join(", ")}
                                                    </p>
                                                </div>
                                            </div>
                                            <svg
                                                className={`w-6 h-6 text-purple-400 transition-transform duration-300 ${showKarmicDebt ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>

                                        {/* Nội dung chi tiết - ẩn/hiện khi bấm nút */}
                                        {showKarmicDebt && (
                                            <div className="mt-6 animate-fade-in">
                                                <p className="text-cream-300 text-sm mb-6 italic">
                                                    {karmicDebtIntro.description}
                                                </p>

                                                {/* Render each karmic debt */}
                                                {result.karmicDebts.map((debtKey) => {
                                                    const karmicDebt = karmicDebts[debtKey];
                                                    if (!karmicDebt) return null;

                                                    return (
                                                        <div key={debtKey} className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 mb-4">
                                                            <div className="flex items-center gap-3 mb-3">
                                                                <span className="px-3 py-1 rounded-lg bg-purple-500/30 text-purple-300 font-bold">
                                                                    {karmicDebt.number}
                                                                </span>
                                                                <div>
                                                                    <h5 className="font-semibold text-purple-400">{karmicDebt.title}</h5>
                                                                    <p className="text-lavender-400 text-sm">{karmicDebt.subtitle}</p>
                                                                </div>
                                                            </div>
                                                            <p className="text-cream-300 text-sm mb-4">{karmicDebt.description}</p>

                                                            {/* Nguồn gốc */}
                                                            <div className="mb-4 p-3 rounded-lg bg-gray-800/50">
                                                                <h6 className="font-semibold text-lavender-400 mb-2 text-sm">🌌 Nguồn gốc tâm linh</h6>
                                                                <p className="text-cream-300 text-sm">{karmicDebt.origin}</p>
                                                            </div>

                                                            {/* Biểu hiện */}
                                                            <div className="mb-4">
                                                                <h6 className="font-semibold text-cream-100 mb-2 text-sm">🧠 Biểu hiện tâm lý hành vi</h6>
                                                                <ul className="space-y-1">
                                                                    {karmicDebt.behaviors.map((b, i) => (
                                                                        <li key={i} className="text-cream-300 text-sm flex items-start gap-2">
                                                                            <span className="text-orange-400">•</span> {b}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Giải pháp */}
                                                            <div>
                                                                <h6 className="font-semibold text-cream-100 mb-3 text-sm">💡 Giải pháp khai vấn</h6>
                                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                                                                    {karmicDebt.solutions.map((s, i) => (
                                                                        <div key={i} className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                                                            <h6 className="font-semibold text-purple-400 text-sm mb-1">{s.title}</h6>
                                                                            <p className="text-cream-300 text-xs">{s.content}</p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}

                                                {/* Lời khuyên về thời điểm */}
                                                {getKarmicActivationAdvice(result.personalYear) && (
                                                    <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                                        <div className="flex items-start gap-3">
                                                            <span className="text-2xl">⏰</span>
                                                            <div>
                                                                <h6 className="font-semibold text-orange-400 mb-1 text-sm">Lời khuyên về thời điểm</h6>
                                                                <p className="text-cream-300 text-sm">{getKarmicActivationAdvice(result.personalYear)}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Copy Button */}
                                <div className="flex justify-center mt-8">
                                    <button
                                        onClick={handleCopyResult}
                                        className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center justify-center gap-2 ${copySuccess ? "bg-green-500 text-white" : "bg-gray-700 hover:bg-gray-600 text-cream-100"}`}
                                    >
                                        {copySuccess ? (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Đã copy!
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                </svg>
                                                Copy kết quả
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Detail Modal */}
            <DetailModal
                isOpen={!!selectedIndicator}
                onClose={() => setSelectedIndicator(null)}
                indicator={selectedIndicator}
                number={selectedNumber}
                meaning={selectedMeaning}
            />
        </>
    );
}
