import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Thần Số Học - Khám phá bản thân",
    description: "Giải mã con số, hiểu rõ chính mình. Từ ngày sinh & họ tên: khám phá tính cách, định hướng và thời vận.",
    keywords: "thần số học, numerology, số chủ đạo, life path, năm cá nhân, tư vấn thần số học",
    authors: [{ name: "Sage Thuần" }],
    openGraph: {
        title: "Thần Số Học - Khám phá bản thân",
        description: "Giải mã con số, hiểu rõ chính mình",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="vi">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
