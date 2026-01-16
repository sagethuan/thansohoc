/**
 * Karmic Debt (Nợ nghiệp) - Thần số học Pythagoras
 * Nợ nghiệp không phải là hình phạt, mà là những "nút thắt" năng lượng
 * từ quá khứ đòi hỏi chúng ta phải có nhận thức cao độ để hóa giải và tiến hóa.
 */

export interface KarmicDebt {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    origin: string;
    behaviors: string[];
    solutions: {
        title: string;
        content: string;
    }[];
    activationYears: number[];
}

export const karmicDebts: Record<string, KarmicDebt> = {
    "14/5": {
        number: "14/5",
        title: "Nợ nghiệp 14/5",
        subtitle: "Bài học về Sự tiết chế và Tự do chân chính",
        description: "Số 5 đại diện cho sự tự do, trải nghiệm và khao khát thay đổi. Tuy nhiên, khi mang mã nợ 14/5, năng lượng này thường bị đẩy sang trạng thái \"quá\" hoặc \"ngược\".",
        origin: "Đây là hệ quả của một tiền kiếp sống vô độ, đắm chìm trong các vui thú nhất thời hoặc lạm dụng quyền tự do cá nhân mà gây ảnh hưởng đến người khác.",
        behaviors: [
            "Thường phải đối mặt với \"cuộc chiến\" nội tâm chống lại sự nghiện ngập (có thể là chất kích thích, mua sắm, hoặc các thói quen độc hại)",
            "Sự vô độ trong lối sống và dễ cảm thấy bị giam cầm",
            "Luôn muốn thoát ly thực tại một cách bốc đồng"
        ],
        solutions: [
            {
                title: "Thực hành điều độ",
                content: "Chìa khóa vàng là sự tiết chế và chừng mực trong mọi việc."
            },
            {
                title: "Xây dựng kỷ luật tự thân",
                content: "Thay vì chạy theo tự do vô định, hãy tìm thấy tự do trong kỷ luật. Tập trung vào các chi tiết nhỏ và kiên trì hoàn thành mục tiêu thay vì bỏ dở giữa chừng khi gặp khó khăn."
            },
            {
                title: "Kết nối thiên nhiên",
                content: "Dành thời gian hòa mình vào thiên nhiên để làm dịu các xung động cảm xúc và tái tạo năng lượng tích cực."
            }
        ],
        activationYears: [4, 5]
    },
    "16/7": {
        number: "16/7",
        title: "Nợ nghiệp 16/7",
        subtitle: "Bài học về Sự trung thực và Chữa lành trái tim",
        description: "Số 7 là con số của tri thức và sự trưởng thành qua trải nghiệm. Với nợ nghiệp 16/7, bài học về sự hy sinh và buông bỏ cái tôi trở nên đặc biệt quan trọng.",
        origin: "Nợ nghiệp này phát sinh từ sự vô trách nhiệm trong tình yêu hoặc sự đam mê mù quáng, ích kỷ trong quá khứ.",
        behaviors: [
            "Rào cản giao tiếp: Thường khó giao tiếp thẳng thắn và thiếu trung thực với người mình yêu",
            "Hội chứng \"Bí mật\": Xu hướng giữ những bí mật riêng tư, dễ gây tổn thương cho các mối quan hệ và thường dẫn đến sự đổ vỡ, ly hôn",
            "Cái tôi quá lớn: Sự kiêu ngạo hoặc ghen tị có thể khiến họ trở nên cô lập trên \"ốc đảo\" của chính mình"
        ],
        solutions: [
            {
                title: "Trung thực tuyệt đối",
                content: "Hãy học cách sống thẳng thắn, phá vỡ thói quen che giấu cảm xúc nội tâm."
            },
            {
                title: "Phụng sự vị tha",
                content: "Thay vì chỉ tập trung vào cái tôi (ego), hãy chủ động giúp đỡ cộng đồng và chia sẻ trí tuệ của mình một cách không vụ lợi."
            },
            {
                title: "Chấp nhận sự thanh lọc",
                content: "Nếu gặp phải mất mát về tình cảm hay vật chất, hãy nhìn nhận đó là một \"bài thi\" để gột rửa bản thân thay vì oán trách số phận."
            }
        ],
        activationYears: [4, 7]
    },
    "13/4": {
        number: "13/4",
        title: "Nợ nghiệp 13/4",
        subtitle: "Bài học về Sự chăm chỉ và Kỷ luật",
        description: "Số 4 đại diện cho nền tảng, kỷ luật và sự ổn định. Với nợ nghiệp 13/4, bạn cần học cách xây dựng cuộc sống từ nền móng vững chắc.",
        origin: "Nợ nghiệp này phát sinh từ sự lười biếng, thiếu trách nhiệm hoặc dựa dẫm vào người khác trong quá khứ.",
        behaviors: [
            "Xu hướng tìm đường tắt thay vì làm việc chăm chỉ",
            "Thiếu kiên nhẫn và dễ bỏ cuộc khi gặp khó khăn",
            "Khó chấp nhận công việc đòi hỏi sự tỉ mỉ và chi tiết"
        ],
        solutions: [
            {
                title: "Xây dựng nền tảng vững chắc",
                content: "Tập trung vào việc hoàn thành từng bước nhỏ một cách kỷ luật."
            },
            {
                title: "Chấp nhận công sức",
                content: "Hiểu rằng thành công đích thực đến từ sự nỗ lực bền bỉ, không có đường tắt."
            },
            {
                title: "Rèn luyện sự kiên nhẫn",
                content: "Thực hành thiền định và các hoạt động đòi hỏi sự tập trung cao độ."
            }
        ],
        activationYears: [4]
    },
    "19/1": {
        number: "19/1",
        title: "Nợ nghiệp 19/1",
        subtitle: "Bài học về Sự khiêm nhường và Hợp tác",
        description: "Số 1 đại diện cho sự lãnh đạo và độc lập. Với nợ nghiệp 19/1, bạn cần học cách sử dụng quyền lực một cách khôn ngoan và có trách nhiệm.",
        origin: "Nợ nghiệp này phát sinh từ việc lạm dụng quyền lực, kiểm soát người khác hoặc quá ích kỷ trong quá khứ.",
        behaviors: [
            "Xu hướng độc đoán và khó chấp nhận ý kiến người khác",
            "Cái tôi quá lớn dẫn đến sự cô lập",
            "Khó khăn trong việc hợp tác và chia sẻ thành công"
        ],
        solutions: [
            {
                title: "Thực hành khiêm nhường",
                content: "Học cách lắng nghe và tôn trọng quan điểm của người khác."
            },
            {
                title: "Chia sẻ quyền lực",
                content: "Phát triển kỹ năng làm việc nhóm và ủy quyền cho người khác."
            },
            {
                title: "Phục vụ cộng đồng",
                content: "Sử dụng năng lực lãnh đạo để giúp đỡ người khác thay vì kiểm soát họ."
            }
        ],
        activationYears: [1]
    }
};

// Kiểm tra xem một số có phải là nợ nghiệp không
export function checkKarmicDebt(lifePath: number): KarmicDebt | null {
    // Các số nợ nghiệp phổ biến liên quan đến Life Path
    const karmicMap: Record<number, string> = {
        1: "19/1",
        4: "13/4",
        5: "14/5",
        7: "16/7"
    };

    const karmicKey = karmicMap[lifePath];
    return karmicKey ? karmicDebts[karmicKey] : null;
}

// Lấy thông tin về thời điểm kích hoạt nợ nghiệp
export function getKarmicActivationAdvice(personalYear: number): string | null {
    if (personalYear === 4) {
        return "Năm cá nhân số 4: Năng lượng nợ nghiệp 13/4 và 14/5 được kích hoạt mạnh mẽ. Đây là thời điểm thu mình lại để học tập, rèn luyện tính kỷ luật và tu tâm dưỡng tính.";
    }
    if (personalYear === 7) {
        return "Năm cá nhân số 7: Năng lượng nợ nghiệp 16/7 được kích hoạt mạnh mẽ. Đây là thời điểm để đối mặt với bài học về trung thực và chữa lành các mối quan hệ.";
    }
    return null;
}

// Thông tin tổng quan về nợ nghiệp
export const karmicDebtIntro = {
    title: "Nợ Nghiệp (Karmic Debt)",
    subtitle: "Những nút thắt năng lượng cần hóa giải",
    description: "Trong bản đồ cuộc đời, nợ nghiệp không phải là hình phạt, mà là những \"nút thắt\" năng lượng từ quá khứ đòi hỏi chúng ta phải có nhận thức cao độ để hóa giải và tiến hóa. Việc nhận diện nợ nghiệp chính là bước đầu tiên để bạn từ vai trò \"nạn nhân\" của số phận trở thành người \"chinh phục\" cuộc đời mình."
};
