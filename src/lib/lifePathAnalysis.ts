/**
 * Extended analysis data for Life Path numbers
 * Includes career guidance and relationship insights
 */

export interface LifePathAnalysis {
    number: number;
    career: string[];
    relationships: string[];
    yearCycleAdvice: string;
    practicalTips: string[];
}

export const lifePathAnalysis: Record<number, LifePathAnalysis> = {
    1: {
        number: 1,
        career: [
            "Phù hợp: CEO, Doanh nhân, Quản lý, Lãnh đạo dự án",
            "Tránh: Công việc phụ thuộc, lặp đi lặp lại",
            "Môi trường: Cần quyền tự chủ và không gian sáng tạo"
        ],
        relationships: [
            "Cần đối tác tôn trọng sự độc lập của bạn",
            "Tránh kiểm soát quá mức trong tình cảm",
            "Học cách lắng nghe và thỏa hiệp"
        ],
        yearCycleAdvice: "Năm 1 là năm khởi đầu mới - hãy bắt đầu dự án và mục tiêu lớn.",
        practicalTips: [
            "Đặt mục tiêu rõ ràng mỗi sáng",
            "Tập lắng nghe trước khi đưa ra quyết định",
            "Dành thời gian cho bản thân để nạp năng lượng"
        ]
    },
    2: {
        number: 2,
        career: [
            "Phù hợp: Tư vấn, Nhân sự, Ngoại giao, Chăm sóc khách hàng",
            "Tránh: Môi trường cạnh tranh khốc liệt",
            "Môi trường: Cần sự hòa hợp và làm việc nhóm"
        ],
        relationships: [
            "Bạn là đối tác tuyệt vời - quan tâm và thấu hiểu",
            "Cẩn thận không hy sinh quá nhiều",
            "Cần người biết trân trọng sự tận tâm của bạn"
        ],
        yearCycleAdvice: "Năm 2 là năm hợp tác - tập trung vào các mối quan hệ và chi tiết.",
        practicalTips: [
            "Học cách nói 'không' khi cần",
            "Tin vào trực giác của mình",
            "Dành thời gian ở một mình để cân bằng"
        ]
    },
    3: {
        number: 3,
        career: [
            "Phù hợp: Nghệ sĩ, MC, Marketing, Nhà văn, Diễn giả",
            "Tránh: Công việc đơn điệu, thiếu sáng tạo",
            "Môi trường: Cần không gian biểu đạt và giao tiếp"
        ],
        relationships: [
            "Mang đến niềm vui và sự lạc quan cho mối quan hệ",
            "Cần không gian để sáng tạo",
            "Tránh trốn tránh vấn đề bằng cách đùa giỡn"
        ],
        yearCycleAdvice: "Năm 3 là năm sáng tạo - mở rộng mối quan hệ xã hội và biểu đạt bản thân.",
        practicalTips: [
            "Tập trung vào 1-2 dự án thay vì nhiều thứ",
            "Viết nhật ký hoặc blog để giải tỏa",
            "Kết nối với những người truyền cảm hứng"
        ]
    },
    4: {
        number: 4,
        career: [
            "Phù hợp: Kế toán, Kỹ sư, Quản lý dự án, Xây dựng",
            "Tránh: Công việc thiếu cấu trúc rõ ràng",
            "Môi trường: Cần quy trình và sự ổn định"
        ],
        relationships: [
            "Đáng tin cậy và trung thành",
            "Cần học cách linh hoạt hơn",
            "Dành thời gian chất lượng cho gia đình"
        ],
        yearCycleAdvice: "Năm 4 là năm xây dựng - làm việc chăm chỉ để tạo nền tảng.",
        practicalTips: [
            "Lập kế hoạch chi tiết cho tuần/tháng",
            "Thử nghiệm điều mới mỗi tuần",
            "Nghỉ ngơi đủ để tránh kiệt sức"
        ]
    },
    5: {
        number: 5,
        career: [
            "Phù hợp: Du lịch, Sales, Báo chí, Startup, Freelance",
            "Tránh: Công việc văn phòng cố định",
            "Môi trường: Cần sự đa dạng và thay đổi"
        ],
        relationships: [
            "Cần không gian và tự do trong mối quan hệ",
            "Thích phiêu lưu và trải nghiệm mới cùng đối tác",
            "Học cách cam kết và ổn định"
        ],
        yearCycleAdvice: "Năm 5 là năm thay đổi - đón nhận cơ hội mới và mở rộng trải nghiệm.",
        practicalTips: [
            "Lên kế hoạch cho những chuyến đi ngắn",
            "Học một kỹ năng mới mỗi tháng",
            "Hoàn thành cam kết trước khi bắt đầu cái mới"
        ]
    },
    6: {
        number: 6,
        career: [
            "Phù hợp: Y tế, Giáo dục, Tư vấn gia đình, Thiết kế nội thất",
            "Tránh: Môi trường thiếu tình người",
            "Môi trường: Cần được giúp đỡ và chăm sóc người khác"
        ],
        relationships: [
            "Là người yêu thương và tận tâm nhất",
            "Cẩn thận không kiểm soát quá mức",
            "Cần được yêu thương lại, không chỉ cho đi"
        ],
        yearCycleAdvice: "Năm 6 là năm gia đình - tập trung vào nhà cửa và các mối quan hệ thân thiết.",
        practicalTips: [
            "Dành 1 giờ mỗi ngày cho bản thân",
            "Học cách ủy quyền và tin tưởng người khác",
            "Tạo không gian yên bình tại nhà"
        ]
    },
    7: {
        number: 7,
        career: [
            "Phù hợp: Nghiên cứu, Phân tích, Tâm lý, Tâm linh, IT",
            "Tránh: Môi trường ồn ào, xã giao nhiều",
            "Môi trường: Cần không gian yên tĩnh và thời gian suy ngẫm"
        ],
        relationships: [
            "Cần người hiểu và tôn trọng nhu cầu một mình",
            "Mở lòng chia sẻ cảm xúc với người thân",
            "Tìm kiếm kết nối tinh thần sâu sắc"
        ],
        yearCycleAdvice: "Năm 7 là năm nội tâm - nghỉ ngơi, suy ngẫm và phát triển tâm linh.",
        practicalTips: [
            "Thiền định 10-15 phút mỗi ngày",
            "Đọc sách về chủ đề sâu sắc",
            "Dành thời gian ở gần thiên nhiên"
        ]
    },
    8: {
        number: 8,
        career: [
            "Phù hợp: Tài chính, Bất động sản, Quản lý, Kinh doanh",
            "Tránh: Công việc thiếu thử thách",
            "Môi trường: Cần cơ hội phát triển và thăng tiến"
        ],
        relationships: [
            "Cần đối tác hiểu ambition của bạn",
            "Cân bằng giữa công việc và gia đình",
            "Cho thấy sự quan tâm không chỉ bằng vật chất"
        ],
        yearCycleAdvice: "Năm 8 là năm thành công - thu hoạch thành quả tài chính và sự nghiệp.",
        practicalTips: [
            "Đặt mục tiêu tài chính rõ ràng",
            "Dành thời gian quality time với gia đình",
            "Cho đi để cân bằng karma"
        ]
    },
    9: {
        number: 9,
        career: [
            "Phù hợp: Nhân đạo, Nghệ thuật, Giáo dục, Tư vấn, Chữa lành",
            "Tránh: Công việc chỉ vì tiền",
            "Môi trường: Cần ý nghĩa và mục đích lớn hơn bản thân"
        ],
        relationships: [
            "Yêu thương sâu sắc và bao dung",
            "Học cách đặt giới hạn lành mạnh",
            "Buông bỏ những mối quan hệ toxic"
        ],
        yearCycleAdvice: "Năm 9 là năm hoàn thành - buông bỏ cái cũ để chuẩn bị cho chu kỳ mới.",
        practicalTips: [
            "Dọn dẹp và thanh lọc cuộc sống",
            "Hoàn thành các dự án dang dở",
            "Thực hành tha thứ và buông bỏ"
        ]
    },
    11: {
        number: 11,
        career: [
            "Phù hợp: Tâm linh, Coaching, Nghệ thuật, Truyền cảm hứng",
            "Tránh: Môi trường năng lượng tiêu cực",
            "Môi trường: Cần không gian để phát triển trực giác"
        ],
        relationships: [
            "Cần đối tác hiểu chiều sâu tâm hồn bạn",
            "Nhạy cảm - cần môi trường hòa hợp",
            "Chia sẻ tầm nhìn với người thân"
        ],
        yearCycleAdvice: "Năm 11 mang năng lượng khai sáng - tin vào trực giác và sứ mệnh.",
        practicalTips: [
            "Thiền định để kết nối trực giác",
            "Ghi lại giấc mơ và linh cảm",
            "Tìm mentor hoặc cộng đồng tâm linh"
        ]
    },
    22: {
        number: 22,
        career: [
            "Phù hợp: Kiến trúc, Chính trị, Doanh nghiệp lớn, NGO",
            "Tránh: Công việc nhỏ lẻ, thiếu tầm nhìn",
            "Môi trường: Cần cơ hội tạo ảnh hưởng lớn"
        ],
        relationships: [
            "Cần đối tác ủng hộ tầm nhìn lớn của bạn",
            "Đừng để sự nghiệp lấn át tình cảm",
            "Chia sẻ mục tiêu với người thân"
        ],
        yearCycleAdvice: "Năm 22 là năm kiến tạo - xây dựng di sản và dự án có ý nghĩa lớn.",
        practicalTips: [
            "Chia mục tiêu lớn thành bước nhỏ",
            "Xây dựng đội ngũ hỗ trợ",
            "Nghỉ ngơi đủ để tránh burn-out"
        ]
    },
    33: {
        number: 33,
        career: [
            "Phù hợp: Chữa lành, Giáo dục, Tâm linh, Từ thiện",
            "Tránh: Môi trường ích kỷ, cạnh tranh",
            "Môi trường: Cần được phụng sự và yêu thương"
        ],
        relationships: [
            "Yêu thương vô điều kiện",
            "Cẩn thận không cho đi quá mức",
            "Cần được chăm sóc lại, không chỉ cho đi"
        ],
        yearCycleAdvice: "Năm 33 mang năng lượng chữa lành - lan tỏa yêu thương nhưng đừng kiệt sức.",
        practicalTips: [
            "Đặt giới hạn lành mạnh khi giúp đỡ",
            "Thực hành self-care mỗi ngày",
            "Kết nối với những người cùng tần số"
        ]
    }
};

// Get analysis by life path number
export function getLifePathAnalysis(number: number): LifePathAnalysis | null {
    return lifePathAnalysis[number] || null;
}
