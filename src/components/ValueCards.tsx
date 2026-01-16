"use client";

import { useEffect, useRef } from "react";

const values = [
    {
        icon: "♈",
        title: "Hiểu điểm mạnh – điểm yếu",
        description: "Khám phá tiềm năng ẩn giấu và những thử thách cần vượt qua trong hành trình cuộc đời."
    },
    {
        icon: "☿",
        title: "Định hướng công việc – mối quan hệ",
        description: "Tìm ra con đường sự nghiệp phù hợp và cách xây dựng các mối quan hệ bền vững."
    },
    {
        icon: "☽",
        title: "Chu kỳ năm cá nhân",
        description: "Nắm bắt năng lượng từng năm để lên kế hoạch và hành động đúng thời điểm."
    },
    {
        icon: "✧",
        title: "Lời khuyên dễ áp dụng",
        description: "Nhận những gợi ý thực tế để cải thiện cuộc sống hàng ngày một cách hiệu quả."
    }
];

export default function ValueCards() {
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

        const cards = sectionRef.current?.querySelectorAll(".animate-on-scroll");
        cards?.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-4 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Giá trị bạn nhận được</span>
                    </h2>
                    <p className="text-cream-300 text-lg max-w-2xl mx-auto">
                        Thần số học không chỉ là những con số – đó là bản đồ dẫn lối bạn đến cuộc sống trọn vẹn hơn
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="animate-on-scroll card-hover glass rounded-2xl p-6 text-center glitter-card mystical-aura"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-5xl mb-4">{value.icon}</div>
                            <h3 className="text-xl font-semibold text-gold-400 mb-3">
                                {value.title}
                            </h3>
                            <p className="text-cream-300 text-sm leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
