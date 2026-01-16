"use client";

import { useEffect, useRef } from "react";

const indices = [
    {
        number: "☉",
        name: "Số Chủ Đạo",
        english: "Life Path",
        description: "Con số quan trọng nhất, thể hiện mục đích và hướng đi chính của cuộc đời.",
        color: "from-gold-400 to-gold-600"
    },
    {
        number: "♃",
        name: "Số Sứ Mệnh",
        english: "Expression/Destiny",
        description: "Tài năng bẩm sinh và những gì bạn được sinh ra để thể hiện trong cuộc sống.",
        color: "from-lavender-400 to-lavender-600"
    },
    {
        number: "♆",
        name: "Số Linh Hồn",
        english: "Soul Urge",
        description: "Khát khao sâu thẳm trong tâm hồn, động lực thúc đẩy mọi quyết định.",
        color: "from-pink-400 to-pink-600"
    },
    {
        number: "♀",
        name: "Số Nhân Cách",
        english: "Personality",
        description: "Cách thế giới bên ngoài nhìn nhận và đánh giá về bạn.",
        color: "from-blue-400 to-blue-600"
    },
    {
        number: "☽",
        name: "Số Ngày Sinh",
        english: "Birthday",
        description: "Tài năng đặc biệt và quà tặng thiên nhiên từ ngày bạn chào đời.",
        color: "from-green-400 to-green-600"
    },
    {
        number: "♂",
        name: "Năm Cá Nhân",
        english: "Personal Year",
        description: "Năng lượng chủ đạo trong năm, giúp lên kế hoạch và hành động hiệu quả.",
        color: "from-orange-400 to-orange-600"
    }
];

export default function IndexCards() {
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
        <section
            ref={sectionRef}
            id="indices"
            className="py-20 px-4 bg-transparent"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 animate-on-scroll">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="gradient-text">Các chỉ số nổi bật</span>
                    </h2>
                    <p className="text-cream-300 text-lg max-w-2xl mx-auto">
                        Khám phá 6 chỉ số quan trọng nhất giúp bạn hiểu rõ về bản thân
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {indices.map((item, index) => (
                        <div
                            key={index}
                            className="animate-on-scroll card-hover glass rounded-2xl p-6 group glitter-card crystal-shine"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}
                                >
                                    {item.number}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-cream-100 mb-1">
                                        {item.name}
                                    </h3>
                                    <p className="text-lavender-400 text-sm mb-2">
                                        {item.english}
                                    </p>
                                    <p className="text-cream-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
