"use client";

import { useState, useEffect, useRef } from "react";

const packages = [
    { value: "basic", label: "Cơ bản 30 phút" },
    { value: "advanced", label: "Chuyên sâu 60 phút" },
    { value: "yearly", label: "Theo năm cá nhân 45 phút" },
];

const timeSlots = [
    { value: "morning", label: "Sáng (8:00 - 12:00)" },
    { value: "afternoon", label: "Chiều (13:00 - 17:00)" },
    { value: "evening", label: "Tối (18:00 - 21:00)" },
];

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        timeSlot: "",
        package: "",
        notes: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
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

    const validatePhone = (phone: string) => {
        const phoneRegex = /^(0|\+84)[0-9]{9,10}$/;
        return phoneRegex.test(phone.replace(/\s/g, ""));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Vui lòng nhập họ tên";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Vui lòng nhập số điện thoại";
        } else if (!validatePhone(formData.phone)) {
            newErrors.phone = "Số điện thoại không hợp lệ";
        }

        if (!formData.date) {
            newErrors.date = "Vui lòng chọn ngày";
        }

        if (!formData.timeSlot) {
            newErrors.timeSlot = "Vui lòng chọn khung giờ";
        }

        if (!formData.package) {
            newErrors.package = "Vui lòng chọn gói tư vấn";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        const payload = {
            ...formData,
            submittedAt: new Date().toISOString(),
        };

        // Log to console as required
        console.log("Booking submitted:", payload);

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Show alert
        alert("Yêu cầu đã gửi!");

        // Reset form
        setFormData({
            name: "",
            phone: "",
            date: "",
            timeSlot: "",
            package: "",
            notes: "",
        });
        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Get minimum date (today)
    const today = new Date().toISOString().split("T")[0];

    return (
        <section
            ref={sectionRef}
            id="booking"
            className="py-20 px-4 bg-gradient-to-b from-gray-900 to-purple-950"
        >
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Đặt lịch tư vấn</span>
                    </h2>
                    <p className="text-cream-300 text-lg">
                        Đăng ký để được chuyên gia phân tích chi tiết biểu đồ thần số học của bạn
                    </p>
                </div>

                <div className="animate-on-scroll glass rounded-3xl p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="bookingName" className="block text-cream-200 font-medium mb-2">
                                    Họ và tên <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="bookingName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nhập họ và tên"
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.name ? "border-red-500" : "border-gray-600"
                                        } text-cream-100 placeholder-gray-500 transition-colors`}
                                />
                                {errors.name && (
                                    <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
                                )}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-cream-200 font-medium mb-2">
                                    Số điện thoại <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="0901234567"
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.phone ? "border-red-500" : "border-gray-600"
                                        } text-cream-100 placeholder-gray-500 transition-colors`}
                                />
                                {errors.phone && (
                                    <p className="mt-2 text-red-400 text-sm">{errors.phone}</p>
                                )}
                            </div>

                            {/* Date */}
                            <div>
                                <label htmlFor="bookingDate" className="block text-cream-200 font-medium mb-2">
                                    Ngày mong muốn <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="bookingDate"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    min={today}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.date ? "border-red-500" : "border-gray-600"
                                        } text-cream-100 transition-colors`}
                                />
                                {errors.date && (
                                    <p className="mt-2 text-red-400 text-sm">{errors.date}</p>
                                )}
                            </div>

                            {/* Time Slot */}
                            <div>
                                <label htmlFor="timeSlot" className="block text-cream-200 font-medium mb-2">
                                    Khung giờ <span className="text-red-400">*</span>
                                </label>
                                <select
                                    id="timeSlot"
                                    name="timeSlot"
                                    value={formData.timeSlot}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.timeSlot ? "border-red-500" : "border-gray-600"
                                        } text-cream-100 transition-colors`}
                                >
                                    <option value="">-- Chọn khung giờ --</option>
                                    {timeSlots.map((slot) => (
                                        <option key={slot.value} value={slot.value}>
                                            {slot.label}
                                        </option>
                                    ))}
                                </select>
                                {errors.timeSlot && (
                                    <p className="mt-2 text-red-400 text-sm">{errors.timeSlot}</p>
                                )}
                            </div>
                        </div>

                        {/* Package */}
                        <div>
                            <label htmlFor="package" className="block text-cream-200 font-medium mb-2">
                                Gói tư vấn <span className="text-red-400">*</span>
                            </label>
                            <select
                                id="package"
                                name="package"
                                value={formData.package}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-xl bg-gray-800/50 border ${errors.package ? "border-red-500" : "border-gray-600"
                                    } text-cream-100 transition-colors`}
                            >
                                <option value="">-- Chọn gói tư vấn --</option>
                                {packages.map((pkg) => (
                                    <option key={pkg.value} value={pkg.value}>
                                        {pkg.label}
                                    </option>
                                ))}
                            </select>
                            {errors.package && (
                                <p className="mt-2 text-red-400 text-sm">{errors.package}</p>
                            )}
                        </div>

                        {/* Notes */}
                        <div>
                            <label htmlFor="notes" className="block text-cream-200 font-medium mb-2">
                                Ghi chú (tuỳ chọn)
                            </label>
                            <textarea
                                id="notes"
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Câu hỏi hoặc yêu cầu đặc biệt..."
                                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-cream-100 placeholder-gray-500 transition-colors resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-glow bg-gradient-to-r from-lavender-500 to-lavender-600 hover:from-lavender-400 hover:to-lavender-500 text-white font-bold px-12 py-4 rounded-full text-lg shadow-lg shadow-lavender-500/30 hover:shadow-lavender-500/50 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        Đang gửi...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                        Gửi yêu cầu
                                    </span>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
