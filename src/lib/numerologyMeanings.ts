/**
 * Complete numerology meanings for all 6 indicator types
 * Based on Pythagorean numerology system
 */

export interface NumberMeaning {
    title: string;
    keywords: string[];
    strengths: string[];
    challenges: string[];
    advice: string;
    description?: string;
    // Mới: Định hướng công việc và mối quan hệ
    career?: string[];
    relationships?: string[];
}

export type IndicatorType = 'lifePath' | 'expression' | 'soulUrge' | 'personality' | 'birthday' | 'personalYear';

// Life Path Meanings (Số Chủ Đạo)
export const lifePathMeanings: Record<number, NumberMeaning> = {
    1: {
        title: "Số 1 – Biểu tượng của Nhất thể và Sự tiên phong",
        keywords: ["Lãnh đạo", "Độc lập", "Sáng tạo", "Cái Tôi", "Tự chủ"],
        strengths: ["Độc lập, quyết đoán, khả năng tập trung cao độ vào mục tiêu", "Có năng lực lãnh đạo bẩm sinh", "Tư duy tiên phong, dám đi đầu"],
        challenges: ["Khi cái Tôi quá lớn dẫn đến độc đoán, ích kỷ", "Dễ lạm dụng quyền lực", "Có thể rơi vào trạng thái cô lập nếu thiếu kết nối"],
        advice: "Cần học cách lắng nghe và chia sẻ thay vì chỉ ra lệnh. Hãy rèn luyện kỹ năng làm việc nhóm để phá vỡ sự cô độc của số 1.",
        description: "Đại diện cho cái Tôi (Ego), sự tự chủ và năng lượng lãnh đạo bẩm sinh. Là tâm điểm cốt lõi của sự tiên phong. Thường liên quan đến nợ nghiệp 19/1 (lạm dụng quyền lực trong quá khứ)."
    },
    2: {
        title: "Số 2 – Trực giác và Sự hòa hợp",
        keywords: ["Trực giác", "Hòa hợp", "Cảm xúc", "Ngoại giao", "Thấu cảm"],
        strengths: ["Nhã nhặn, thấu cảm, đóng vai trò nhà hòa giải xuất sắc", "Có trực giác nhạy bén", "Khéo léo trong giao tiếp và hợp tác"],
        challenges: ["Quá nhạy cảm dẫn đến dễ bị tổn thương", "Đôi khi dựa dẫm vào lý trí mà bỏ qua trực giác", "Có thể gặp mâu thuẫn nội tâm"],
        advice: "Hãy tin vào trực giác bẩm sinh và học cách thiết lập ranh giới cảm xúc để tránh bị thao túng bởi vấn đề của người khác.",
        description: "Cánh cổng dẫn vào cảm xúc và trực giác nhạy bén. Nếu Số Đường đời là 2 nhưng tên mang năng lượng số 1, cá nhân sẽ gặp mâu thuẫn giữa nhu cầu hòa hợp và cái tôi cá nhân."
    },
    3: {
        title: "Số 3 – Trí tuệ và Sáng tạo",
        keywords: ["Trí tuệ", "Sáng tạo", "Giao tiếp", "Ý thức", "Phân tích"],
        strengths: ["Linh hoạt, hài hước, tư duy nhanh nhạy", "Giỏi lên kế hoạch và quản lý trí nhớ", "Có khả năng phân tích xuất sắc"],
        challenges: ["Trịch thượng, gia trưởng", "Hay chỉ trích những người kém nhanh nhạy hơn", "Nếu lười tư duy, trí thông minh sẽ bị mai một"],
        advice: "Sử dụng óc hài hước để kết nối thay vì phán xét. Duy trì việc học hỏi liên tục để giữ cho trí não luôn sắc sảo.",
        description: "Cổng dẫn vào Ý thức, quản lý trí nhớ và khả năng phân tích. Số 3 là biểu tượng của sự biểu đạt trí tuệ và năng lượng sáng tạo."
    },
    4: {
        title: "Số 4 – Nền tảng và Kỷ luật",
        keywords: ["Nền tảng", "Kỷ luật", "Thực tế", "Tổ chức", "Hệ thống"],
        strengths: ["Chăm chỉ, chính trực, tháo vát", "Giỏi trong các vấn đề kỹ thuật và tài chính", "Có óc tổ chức và tính hệ thống"],
        challenges: ["Cứng nhắc, thiếu kiên nhẫn với các vấn đề tinh thần", "Dễ bị ám ảnh bởi vật chất", "Có thể trở thành 'tôi tớ' của công việc"],
        advice: "Cần cân bằng giữa làm việc và thư giãn thông qua hành thiền để mở rộng tâm thức, tránh biến mình thành nô lệ của công việc.",
        description: "Tâm điểm cốt lõi của sự thực tế, óc tổ chức và tính hệ thống. Liên quan đến nợ nghiệp 13/4 (bài học về sự chăm chỉ để khắc phục sự lười biếng quá khứ)."
    },
    5: {
        title: "Số 5 – Tự do và Kết nối cảm xúc",
        keywords: ["Tự do", "Kết nối", "Cảm xúc", "Trắc ẩn", "Phiêu lưu"],
        strengths: ["Giàu lòng trắc ẩn, yêu phiêu lưu", "Có trực giác nhạy bén", "Là 'cục nhân' của biểu đồ, kết nối mọi nguồn lực"],
        challenges: ["Bất ổn, bốc đồng, dễ thay đổi thất thường", "Có xu hướng thoát ly thực tế nếu bị gò bó", "Dễ rơi vào nghiện ngập hoặc vô độ"],
        advice: "Tham gia các hoạt động ngoài trời và tập trung vào việc diễn đạt cảm xúc một cách tích cực để kết nối mọi nguồn lực trong cuộc sống.",
        description: "'Cục nhân' của biểu đồ, đại diện cho tình yêu thương và sự tự do biểu đạt. Liên quan đến nợ nghiệp 14/5 (bài học về sự tiết chế để vượt qua sự nghiện ngập)."
    },
    6: {
        title: "Số 6 – Tình yêu và Trách nhiệm",
        keywords: ["Tình yêu", "Trách nhiệm", "Sáng tạo", "Gia đình", "Nuôi dưỡng"],
        strengths: ["Nuôi dưỡng, bao dung với tình yêu thương vô điều kiện", "Có khả năng làm bừng sáng môi trường làm việc", "Sáng tạo và đầy nghệ thuật"],
        challenges: ["Dễ bị gánh nặng trách nhiệm đè nén", "Dẫn đến bất an, lo lắng thái quá và phàn nàn", "Có thể để hoàn cảnh kiểm soát thay vì làm chủ"],
        advice: "Học cách làm chủ tình huống thay vì để hoàn cảnh kiểm soát. Hãy sáng tạo một cách chủ động (vẽ, nhạc, gốm) để giải phóng năng lượng tiêu cực.",
        description: "Tâm điểm cốt lõi của sự sáng tạo và tình yêu thương vô điều kiện đối với gia đình. Số 6 mang năng lượng của sự nuôi dưỡng và trách nhiệm."
    },
    7: {
        title: "Số 7 – Trải nghiệm và Triết lý",
        keywords: ["Trải nghiệm", "Triết lý", "Dạy và học", "Tâm linh", "Hy sinh"],
        strengths: ["Tư tưởng thâm trầm, có chiều sâu", "Khả năng đúc kết triết lý sống sâu sắc từ những vấp ngã", "Trực giác mạnh và sâu sắc"],
        challenges: ["Cố chấp, nổi loạn", "Dễ rơi vào trầm cảm nếu không vượt qua tổn thất", "Có thể mất mát về sức khỏe, tiền tài hoặc tình yêu"],
        advice: "Chấp nhận sự hy sinh như một 'bài thi' để tiến hóa. Hãy chủ động giúp đỡ cộng đồng để giảm bớt các bài học đau thương bị động.",
        description: "Con số của sự dạy và học thông qua trải nghiệm thực tế, mất mát. Liên quan đến nợ nghiệp 16/7 (vượt qua sự ghen tị và tính ích kỷ trong tình yêu)."
    },
    8: {
        title: "Số 8 – Trí tuệ và Điều hành",
        keywords: ["Trí tuệ", "Điều hành", "Độc lập tài chính", "Hệ thống", "Tầm nhìn"],
        strengths: ["Tỉ mỉ, có hệ thống, tự lập", "Có tầm nhìn xa và trí tuệ bản năng", "Độc lập về tài chính và quản lý giỏi"],
        challenges: ["Lạnh nhạt, độc tài hoặc không ổn định cảm xúc", "Quá chú trọng vật chất", "Có thể bỏ qua các mối quan hệ"],
        advice: "Nỗ lực biểu đạt lòng biết ơn và tình cảm để cải thiện các mối quan hệ. Đi du lịch là cách tốt nhất để nâng cao trí tuệ và sự khôn ngoan cho số 8.",
        description: "Tâm điểm cốt lõi của trí tuệ bản năng và sự độc lập về tài chính. Số 8 mang năng lượng điều hành và xây dựng hệ thống."
    },
    9: {
        title: "Số 9 – Hoài bão và Nhân văn",
        keywords: ["Hoài bão", "Nhân văn", "Uy quyền", "Trách nhiệm", "Lý tưởng"],
        strengths: ["Trung thực, nhiệt huyết, luôn hướng tới phục vụ nhân loại", "Con số uy quyền nhất, đại diện cho trách nhiệm", "Có lý tưởng cao đẹp"],
        challenges: ["Thiếu thực tế, dễ thất vọng", "Có thể trở nên thô lỗ nếu lý tưởng không được đáp ứng", "Quá nghiêm túc"],
        advice: "Học cách biến lý tưởng thành hành động thực tế. Cần học cách vui cười nhiều hơn để cân bằng lại sự nghiêm túc thái quá.",
        description: "Con số uy quyền nhất, đại diện cho trách nhiệm và lý tưởng hóa. Số 9 mang năng lượng hoài bão và nhân văn, phụng sự nhân loại."
    },
    11: {
        title: "Số 11 – Số Vua: Tần số Tâm linh cao",
        keywords: ["Tâm linh", "Siêu thức", "Linh hồn già", "Khai sáng", "Dẫn dắt"],
        strengths: ["Mang tiềm năng phi thường để phát triển nhận thức siêu thức", "Là những 'linh hồn già' mang trách nhiệm dẫn dắt thời đại mới", "Trực giác tâm linh mạnh mẽ"],
        challenges: ["Dễ bị cám dỗ bởi vật chất", "Có thể rời xa sứ mệnh tâm linh", "Căng thẳng nội tâm và kỳ vọng cao"],
        advice: "Cần học cách cân bằng đời sống vật chất với những lý tưởng tinh thần bền vững. Thiền định là chìa khóa.",
        description: "Master Number mang tiềm năng phi thường để phát triển nhận thức siêu thức. Là những 'linh hồn già' mang trách nhiệm dẫn dắt nhận thức thời đại mới."
    },
    22: {
        title: "Số 22/4 – Số Vua: Nhà Kiến tạo đại tài",
        keywords: ["Kiến tạo", "Di sản", "Trực giác", "Thực tế", "Tiềm năng vô hạn"],
        strengths: ["Kết hợp trực giác của 11 và tính thực tế của 4", "Tiềm năng gần như vô hạn trong việc xây dựng di sản", "Có tầm nhìn vĩ mô và khả năng hiện thực hóa"],
        challenges: ["Nếu sống tiêu cực sẽ trở nên u ám", "Ám ảnh với tiền bạc và có thể lạc lối", "Áp lực nặng nề, sợ thất bại"],
        advice: "Nỗ lực phát huy kỹ năng tổ chức trong các lĩnh vực nhân văn để đạt được sự cân bằng. Từng bước xây dựng mục tiêu lớn.",
        description: "Master Number mạnh nhất - kết hợp trực giác của 11 và tính thực tế của 4. Tiềm năng gần như vô hạn trong việc xây dựng các di sản cho nhân loại."
    },
    33: {
        title: "Số 33/6 – Số Vua: Nhà giáo đại tài",
        keywords: ["Chữa lành", "Tầm ảnh hưởng", "Lòng trắc ẩn", "Yêu thương", "Tấm gương"],
        strengths: ["Tầm ảnh hưởng mạnh mẽ, lòng trắc ẩn sâu sắc", "Khả năng chữa lành thông qua tình yêu thương", "Có thể trở thành tấm gương sáng cho cộng đồng"],
        challenges: ["Dễ mắc tâm lý 'tử vì đạo' hoặc hay phàn nàn", "Hy sinh quá mức dẫn đến kiệt sức", "Gánh nặng trách nhiệm lớn"],
        advice: "Tập trung vào việc làm chủ cảm xúc để trở thành tấm gương sáng cho cộng đồng. Chỉ cho đi trọn vẹn khi chính bạn được nuôi dưỡng đầy đủ.",
        description: "Master Number của tình yêu vô điều kiện (theo hệ thống Pythagoras nâng cao). Tầm ảnh hưởng mạnh mẽ, lòng trắc ẩn sâu sắc và khả năng chữa lành thông qua tình yêu thương."
    }
};

// Expression Meanings (Số Sứ Mệnh)
export const expressionMeanings: Record<number, NumberMeaning> = {
    1: {
        title: "Sứ Mệnh Lãnh Đạo",
        keywords: ["Tiên phong", "Độc lập", "Sáng tạo"],
        strengths: ["Khả năng lãnh đạo bẩm sinh", "Sáng kiến độc đáo", "Quyết đoán"],
        challenges: ["Độc đoán", "Khó hợp tác", "Nóng vội"],
        advice: "Sử dụng năng lực lãnh đạo để truyền cảm hứng, không áp đặt.",
        description: "Sứ mệnh của bạn là dẫn đầu và mở đường cho người khác."
    },
    2: {
        title: "Sứ Mệnh Hợp Tác",
        keywords: ["Hòa giải", "Ngoại giao", "Hỗ trợ"],
        strengths: ["Kết nối con người", "Nhạy cảm", "Kiên nhẫn"],
        challenges: ["Thiếu tự tin", "Phụ thuộc", "Nhạy cảm quá mức"],
        advice: "Bạn là cầu nối - hãy tin vào giá trị của việc hỗ trợ.",
        description: "Sứ mệnh của bạn là kết nối và tạo sự hài hòa."
    },
    3: {
        title: "Sứ Mệnh Sáng Tạo",
        keywords: ["Nghệ thuật", "Biểu đạt", "Truyền thông"],
        strengths: ["Tài năng nghệ thuật", "Giao tiếp xuất sắc", "Lạc quan"],
        challenges: ["Phân tán", "Hời hợt", "Thiếu kỷ luật"],
        advice: "Tập trung năng lượng sáng tạo vào một lĩnh vực để tỏa sáng.",
        description: "Sứ mệnh của bạn là sáng tạo và truyền cảm hứng qua nghệ thuật."
    },
    4: {
        title: "Sứ Mệnh Xây Dựng",
        keywords: ["Nền tảng", "Kỷ luật", "Thực tế"],
        strengths: ["Đáng tin cậy", "Tổ chức giỏi", "Kiên trì"],
        challenges: ["Cứng nhắc", "Bảo thủ", "Quá khắt khe"],
        advice: "Xây dựng nền tảng vững chắc nhưng vẫn linh hoạt thay đổi.",
        description: "Sứ mệnh của bạn là xây dựng những giá trị bền vững."
    },
    5: {
        title: "Sứ Mệnh Tự Do",
        keywords: ["Phiêu lưu", "Thay đổi", "Đa dạng"],
        strengths: ["Thích nghi", "Đa tài", "Năng động"],
        challenges: ["Thiếu cam kết", "Bất ổn", "Thiếu kiên nhẫn"],
        advice: "Tự do thực sự đến từ việc hoàn thành cam kết.",
        description: "Sứ mệnh của bạn là mang đến sự thay đổi và trải nghiệm mới."
    },
    6: {
        title: "Sứ Mệnh Chữa Lành",
        keywords: ["Chăm sóc", "Trách nhiệm", "Gia đình"],
        strengths: ["Yêu thương", "Tận tâm", "Hỗ trợ"],
        challenges: ["Lo lắng quá mức", "Kiểm soát", "Quên bản thân"],
        advice: "Chăm sóc bản thân để có thể chăm sóc người khác tốt hơn.",
        description: "Sứ mệnh của bạn là mang đến sự yêu thương và chữa lành."
    },
    7: {
        title: "Sứ Mệnh Tìm Kiếm",
        keywords: ["Nghiên cứu", "Tâm linh", "Chiều sâu"],
        strengths: ["Phân tích", "Trực giác", "Hiểu biết sâu"],
        challenges: ["Cô lập", "Hoài nghi", "Khó kết nối"],
        advice: "Chia sẻ trí tuệ của bạn với thế giới.",
        description: "Sứ mệnh của bạn là tìm kiếm và chia sẻ sự thật."
    },
    8: {
        title: "Sứ Mệnh Thành Công",
        keywords: ["Quyền lực", "Tài chính", "Quản lý"],
        strengths: ["Lãnh đạo", "Tầm nhìn kinh doanh", "Quyết đoán"],
        challenges: ["Tham lam", "Độc đoán", "Bỏ qua tình cảm"],
        advice: "Sử dụng thành công để tạo giá trị cho cộng đồng.",
        description: "Sứ mệnh của bạn là đạt được và chia sẻ sự thịnh vượng."
    },
    9: {
        title: "Sứ Mệnh Nhân Đạo",
        keywords: ["Phụng sự", "Bao dung", "Toàn cầu"],
        strengths: ["Vị tha", "Lý tưởng", "Truyền cảm hứng"],
        challenges: ["Hy sinh quá mức", "Lý tưởng hóa", "Khó buông bỏ"],
        advice: "Phụng sự từ trái tim nhưng đừng quên bản thân.",
        description: "Sứ mệnh của bạn là phụng sự nhân loại với tình yêu."
    },
    11: {
        title: "Sứ Mệnh Khai Sáng",
        keywords: ["Trực giác", "Tâm linh", "Truyền đạt"],
        strengths: ["Nhạy bén tâm linh", "Truyền cảm hứng", "Tầm nhìn"],
        challenges: ["Áp lực nội tâm", "Lo âu", "Kỳ vọng cao"],
        advice: "Kết nối với trực giác để dẫn dắt người khác.",
        description: "Sứ mệnh cao cả là mang ánh sáng và sự khai sáng."
    },
    22: {
        title: "Sứ Mệnh Kiến Tạo",
        keywords: ["Xây dựng lớn", "Di sản", "Thực tiễn"],
        strengths: ["Tầm nhìn vĩ mô", "Thực hiện hóa", "Lãnh đạo"],
        challenges: ["Áp lực lớn", "Sợ thất bại", "Cô đơn"],
        advice: "Từng bước xây dựng di sản có ý nghĩa.",
        description: "Sứ mệnh kiến tạo những công trình vĩ đại cho nhân loại."
    },
    33: {
        title: "Sứ Mệnh Chữa Lành Nhân Loại",
        keywords: ["Yêu thương", "Phụng sự", "Giác ngộ"],
        strengths: ["Yêu thương vô điều kiện", "Chữa lành", "Truyền cảm hứng"],
        challenges: ["Hy sinh quá mức", "Kiệt sức", "Gánh nặng"],
        advice: "Nuôi dưỡng bản thân để lan tỏa yêu thương.",
        description: "Sứ mệnh cao nhất là chữa lành và yêu thương nhân loại."
    }
};

// Soul Urge Meanings (Số Linh Hồn)
export const soulUrgeMeanings: Record<number, NumberMeaning> = {
    1: {
        title: "Linh Hồn Độc Lập",
        keywords: ["Tự chủ", "Dẫn đầu", "Cá nhân"],
        strengths: ["Khao khát độc lập", "Tự tin", "Quyết đoán"],
        challenges: ["Ích kỷ", "Cô đơn", "Kiêu ngạo"],
        advice: "Theo đuổi đam mê cá nhân nhưng vẫn kết nối với người khác.",
        description: "Linh hồn bạn khao khát sự độc lập và tự chủ hoàn toàn."
    },
    2: {
        title: "Linh Hồn Hòa Hợp",
        keywords: ["Tình yêu", "Hợp tác", "Hòa bình"],
        strengths: ["Khao khát tình yêu", "Nhạy cảm", "Thấu hiểu"],
        challenges: ["Phụ thuộc", "Nhạy cảm quá", "Thiếu quyết đoán"],
        advice: "Tìm kiếm sự cân bằng trong các mối quan hệ.",
        description: "Linh hồn bạn khao khát tình yêu, hòa hợp và sự kết nối."
    },
    3: {
        title: "Linh Hồn Sáng Tạo",
        keywords: ["Biểu đạt", "Niềm vui", "Nghệ thuật"],
        strengths: ["Khao khát sáng tạo", "Lạc quan", "Truyền thông"],
        challenges: ["Nông cạn", "Thiếu tập trung", "Trốn tránh thực tế"],
        advice: "Sử dụng sáng tạo để chữa lành và truyền cảm hứng.",
        description: "Linh hồn bạn khao khát được biểu đạt và mang đến niềm vui."
    },
    4: {
        title: "Linh Hồn Ổn Định",
        keywords: ["An toàn", "Trật tự", "Nền tảng"],
        strengths: ["Khao khát ổn định", "Đáng tin cậy", "Kiên trì"],
        challenges: ["Cứng nhắc", "Sợ thay đổi", "Bảo thủ"],
        advice: "Xây dựng nền tảng vững chắc cho những ước mơ lớn.",
        description: "Linh hồn bạn khao khát sự ổn định và an toàn."
    },
    5: {
        title: "Linh Hồn Tự Do",
        keywords: ["Phiêu lưu", "Thay đổi", "Khám phá"],
        strengths: ["Khao khát tự do", "Năng động", "Đa dạng"],
        challenges: ["Bất ổn", "Thiếu cam kết", "Nông cạn"],
        advice: "Tìm tự do trong kỷ luật và cam kết.",
        description: "Linh hồn bạn khao khát tự do và những trải nghiệm mới."
    },
    6: {
        title: "Linh Hồn Yêu Thương",
        keywords: ["Gia đình", "Chăm sóc", "Hài hòa"],
        strengths: ["Khao khát yêu thương", "Tận tâm", "Chữa lành"],
        challenges: ["Lo lắng", "Kiểm soát", "Quên bản thân"],
        advice: "Yêu thương bản thân trước để yêu thương người khác tốt hơn.",
        description: "Linh hồn bạn khao khát được yêu thương và chăm sóc."
    },
    7: {
        title: "Linh Hồn Trí Tuệ",
        keywords: ["Hiểu biết", "Tâm linh", "Sự thật"],
        strengths: ["Khao khát hiểu biết", "Sâu sắc", "Trực giác"],
        challenges: ["Cô lập", "Hoài nghi", "Xa cách"],
        advice: "Kết hợp trí tuệ với trái tim để sống trọn vẹn.",
        description: "Linh hồn bạn khao khát sự hiểu biết sâu sắc và tâm linh."
    },
    8: {
        title: "Linh Hồn Thành Công",
        keywords: ["Quyền lực", "Thịnh vượng", "Thành tựu"],
        strengths: ["Khao khát thành công", "Tham vọng", "Quyết đoán"],
        challenges: ["Vật chất hóa", "Độc đoán", "Mất cân bằng"],
        advice: "Sử dụng thành công để tạo giá trị cho cộng đồng.",
        description: "Linh hồn bạn khao khát thành công và sự thịnh vượng."
    },
    9: {
        title: "Linh Hồn Nhân Đạo",
        keywords: ["Phụng sự", "Bao dung", "Hoàn thiện"],
        strengths: ["Khao khát phụng sự", "Vị tha", "Lý tưởng"],
        challenges: ["Hy sinh quá mức", "Tự phê phán", "Khó buông bỏ"],
        advice: "Phụng sự với niềm vui, không với sự hy sinh.",
        description: "Linh hồn bạn khao khát phụng sự nhân loại."
    },
    11: {
        title: "Linh Hồn Khai Sáng",
        keywords: ["Trực giác", "Tâm linh", "Ánh sáng"],
        strengths: ["Khao khát khai sáng", "Nhạy cảm tâm linh", "Trực giác cao"],
        challenges: ["Lo âu", "Áp lực", "Khó tiếp đất"],
        advice: "Cân bằng giữa thế giới tâm linh và thực tế.",
        description: "Linh hồn bạn khao khát mang ánh sáng cho thế giới."
    },
    22: {
        title: "Linh Hồn Kiến Tạo",
        keywords: ["Di sản", "Tầm nhìn", "Xây dựng"],
        strengths: ["Khao khát kiến tạo", "Tầm nhìn lớn", "Thực tiễn"],
        challenges: ["Áp lực", "Sợ thất bại", "Cô đơn"],
        advice: "Từng bước hiện thực hóa những ước mơ lớn.",
        description: "Linh hồn bạn khao khát kiến tạo di sản vĩ đại."
    },
    33: {
        title: "Linh Hồn Chữa Lành",
        keywords: ["Yêu thương", "Chữa lành", "Phụng sự"],
        strengths: ["Yêu thương vô điều kiện", "Chữa lành", "Truyền cảm hứng"],
        challenges: ["Kiệt sức", "Quên bản thân", "Gánh nặng"],
        advice: "Chăm sóc bản thân để có thể chữa lành người khác.",
        description: "Linh hồn bạn khao khát chữa lành và yêu thương nhân loại."
    }
};

// Personality Meanings (Số Nhân Cách)
export const personalityMeanings: Record<number, NumberMeaning> = {
    1: {
        title: "Nhân Cách Độc Lập",
        keywords: ["Tự tin", "Mạnh mẽ", "Quyết đoán"],
        strengths: ["Ấn tượng mạnh mẽ", "Tự tin", "Lãnh đạo"],
        challenges: ["Kiêu ngạo", "Lạnh lùng", "Xa cách"],
        advice: "Cho thấy sự ấm áp bên trong vẻ ngoài mạnh mẽ.",
        description: "Người khác thấy bạn là người độc lập, tự tin và quyết đoán."
    },
    2: {
        title: "Nhân Cách Hòa Nhã",
        keywords: ["Thân thiện", "Nhẹ nhàng", "Hợp tác"],
        strengths: ["Dễ gần", "Đáng tin cậy", "Hỗ trợ"],
        challenges: ["Thiếu quyết đoán", "Yếu đuối", "Phụ thuộc"],
        advice: "Thể hiện sức mạnh nội tâm bên cạnh vẻ dịu dàng.",
        description: "Người khác thấy bạn thân thiện, nhẹ nhàng và dễ hợp tác."
    },
    3: {
        title: "Nhân Cách Vui Vẻ",
        keywords: ["Lạc quan", "Sáng tạo", "Quyến rũ"],
        strengths: ["Hấp dẫn", "Lạc quan", "Giao tiếp tốt"],
        challenges: ["Hời hợt", "Phân tán", "Thiếu nghiêm túc"],
        advice: "Cho thấy chiều sâu bên dưới vẻ ngoài vui vẻ.",
        description: "Người khác thấy bạn vui vẻ, sáng tạo và đầy quyến rũ."
    },
    4: {
        title: "Nhân Cách Đáng Tin Cậy",
        keywords: ["Ổn định", "Thực tế", "Đáng tin"],
        strengths: ["Đáng tin cậy", "Chăm chỉ", "Thực tế"],
        challenges: ["Nhàm chán", "Cứng nhắc", "Thiếu linh hoạt"],
        advice: "Thể hiện sự sáng tạo bên cạnh sự ổn định.",
        description: "Người khác thấy bạn đáng tin cậy, ổn định và thực tế."
    },
    5: {
        title: "Nhân Cách Năng Động",
        keywords: ["Linh hoạt", "Thú vị", "Phiêu lưu"],
        strengths: ["Hấp dẫn", "Năng động", "Đa dạng"],
        challenges: ["Bất ổn", "Thiếu cam kết", "Hời hợt"],
        advice: "Thể hiện sự cam kết bên cạnh sự tự do.",
        description: "Người khác thấy bạn năng động, thú vị và đầy phiêu lưu."
    },
    6: {
        title: "Nhân Cách Ấm Áp",
        keywords: ["Yêu thương", "Chăm sóc", "Đáng tin"],
        strengths: ["Ấm áp", "Đáng tin cậy", "Chăm sóc"],
        challenges: ["Lo lắng", "Can thiệp", "Kiểm soát"],
        advice: "Cho phép người khác tự do bên cạnh sự chăm sóc.",
        description: "Người khác thấy bạn ấm áp, đáng tin cậy và biết chăm sóc."
    },
    7: {
        title: "Nhân Cách Bí Ẩn",
        keywords: ["Trí tuệ", "Sâu sắc", "Bí ẩn"],
        strengths: ["Thông minh", "Sâu sắc", "Đáng tin cậy"],
        challenges: ["Xa cách", "Khó tiếp cận", "Lạnh lùng"],
        advice: "Mở lòng hơn để kết nối với người khác.",
        description: "Người khác thấy bạn thông minh, bí ẩn và sâu sắc."
    },
    8: {
        title: "Nhân Cách Thành Công",
        keywords: ["Quyền lực", "Thành công", "Chuyên nghiệp"],
        strengths: ["Ấn tượng", "Thành công", "Có uy quyền"],
        challenges: ["Đáng sợ", "Xa cách", "Vật chất"],
        advice: "Thể hiện sự ấm áp bên cạnh sự thành công.",
        description: "Người khác thấy bạn thành công, có uy quyền và chuyên nghiệp."
    },
    9: {
        title: "Nhân Cách Bao Dung",
        keywords: ["Vị tha", "Lý tưởng", "Phụng sự"],
        strengths: ["Đáng ngưỡng mộ", "Vị tha", "Truyền cảm hứng"],
        challenges: ["Xa vời", "Khó tiếp cận", "Lý tưởng hóa"],
        advice: "Kết nối với những điều thực tế hàng ngày.",
        description: "Người khác thấy bạn vị tha, lý tưởng và đầy cảm hứng."
    },
    11: {
        title: "Nhân Cách Khai Sáng",
        keywords: ["Trực giác", "Tâm linh", "Sáng suốt"],
        strengths: ["Sáng suốt", "Truyền cảm hứng", "Đặc biệt"],
        challenges: ["Khó hiểu", "Xa cách", "Áp lực"],
        advice: "Chia sẻ ánh sáng nội tâm một cách căn bản.",
        description: "Người khác thấy bạn đặc biệt, sáng suốt và đầy cảm hứng."
    },
    22: {
        title: "Nhân Cách Kiến Tạo",
        keywords: ["Tầm nhìn", "Năng lực", "Uy tín"],
        strengths: ["Ấn tượng", "Có tầm nhìn", "Đáng tin cậy"],
        challenges: ["Đáng sợ", "Xa cách", "Áp lực"],
        advice: "Thể hiện sự gần gũi bên cạnh tầm nhìn lớn.",
        description: "Người khác thấy bạn có tầm nhìn lớn và năng lực kiến tạo."
    },
    33: {
        title: "Nhân Cách Yêu Thương",
        keywords: ["Từ bi", "Chữa lành", "Ánh sáng"],
        strengths: ["Yêu thương", "Chữa lành", "Truyền cảm hứng"],
        challenges: ["Quá tốt", "Dễ bị lợi dụng", "Kiệt sức"],
        advice: "Bảo vệ năng lượng bản thân trong khi cho đi.",
        description: "Người khác thấy bạn như nguồn yêu thương và chữa lành."
    }
};

// Birthday Meanings (Số Ngày Sinh)
export const birthdayMeanings: Record<number, NumberMeaning> = {
    1: {
        title: "Tài Năng Lãnh Đạo",
        keywords: ["Độc lập", "Sáng tạo", "Tiên phong"],
        strengths: ["Khả năng lãnh đạo", "Sáng kiến", "Tự tin"],
        challenges: ["Cái tôi cao", "Khó hợp tác", "Nóng vội"],
        advice: "Sử dụng tài năng lãnh đạo để khai phá và dẫn đường.",
        description: "Bạn có tài năng bẩm sinh trong việc lãnh đạo và tiên phong."
    },
    2: {
        title: "Tài Năng Ngoại Giao",
        keywords: ["Hợp tác", "Hòa giải", "Nhạy cảm"],
        strengths: ["Kết nối", "Nhạy cảm", "Hỗ trợ"],
        challenges: ["Thiếu quyết đoán", "Phụ thuộc", "Nhạy cảm quá"],
        advice: "Sử dụng tài năng ngoại giao để tạo sự hòa hợp.",
        description: "Bạn có tài năng bẩm sinh trong việc kết nối và hòa giải."
    },
    3: {
        title: "Tài Năng Biểu Đạt",
        keywords: ["Sáng tạo", "Giao tiếp", "Nghệ thuật"],
        strengths: ["Sáng tạo", "Giao tiếp", "Lạc quan"],
        challenges: ["Phân tán", "Thiếu kỷ luật", "Hời hợt"],
        advice: "Sử dụng tài năng sáng tạo để truyền cảm hứng.",
        description: "Bạn có tài năng bẩm sinh trong việc sáng tạo và biểu đạt."
    },
    4: {
        title: "Tài Năng Tổ Chức",
        keywords: ["Thực tế", "Kỷ luật", "Xây dựng"],
        strengths: ["Tổ chức", "Kiên trì", "Đáng tin cậy"],
        challenges: ["Cứng nhắc", "Bảo thủ", "Khắt khe"],
        advice: "Sử dụng tài năng tổ chức để xây dựng nền tảng vững chắc.",
        description: "Bạn có tài năng bẩm sinh trong việc tổ chức và xây dựng."
    },
    5: {
        title: "Tài Năng Thích Nghi",
        keywords: ["Linh hoạt", "Đa dạng", "Phiêu lưu"],
        strengths: ["Thích nghi", "Năng động", "Đa tài"],
        challenges: ["Thiếu cam kết", "Bất ổn", "Nông cạn"],
        advice: "Sử dụng tài năng thích nghi để mở rộng trải nghiệm.",
        description: "Bạn có tài năng bẩm sinh trong việc thích nghi và khám phá."
    },
    6: {
        title: "Tài Năng Chăm Sóc",
        keywords: ["Yêu thương", "Trách nhiệm", "Hài hòa"],
        strengths: ["Chăm sóc", "Trách nhiệm", "Chữa lành"],
        challenges: ["Lo lắng", "Kiểm soát", "Quên bản thân"],
        advice: "Sử dụng tài năng chăm sóc để mang đến sự hòa hợp.",
        description: "Bạn có tài năng bẩm sinh trong việc chăm sóc và yêu thương."
    },
    7: {
        title: "Tài Năng Phân Tích",
        keywords: ["Trí tuệ", "Nghiên cứu", "Trực giác"],
        strengths: ["Phân tích", "Trực giác", "Sâu sắc"],
        challenges: ["Cô lập", "Hoài nghi", "Xa cách"],
        advice: "Sử dụng tài năng phân tích để tìm kiếm sự thật.",
        description: "Bạn có tài năng bẩm sinh trong việc phân tích và nghiên cứu."
    },
    8: {
        title: "Tài Năng Quản Lý",
        keywords: ["Quyền lực", "Tài chính", "Thành công"],
        strengths: ["Quản lý", "Tầm nhìn", "Quyết đoán"],
        challenges: ["Vật chất", "Độc đoán", "Áp lực"],
        advice: "Sử dụng tài năng quản lý để tạo thịnh vượng cho mọi người.",
        description: "Bạn có tài năng bẩm sinh trong việc quản lý và kinh doanh."
    },
    9: {
        title: "Tài Năng Nhân Đạo",
        keywords: ["Vị tha", "Sáng tạo", "Bao dung"],
        strengths: ["Vị tha", "Sáng tạo", "Truyền cảm hứng"],
        challenges: ["Hy sinh quá mức", "Lý tưởng hóa", "Khó buông bỏ"],
        advice: "Sử dụng tài năng nhân đạo để phụng sự cộng đồng.",
        description: "Bạn có tài năng bẩm sinh trong việc sáng tạo và phụng sự."
    },
    11: {
        title: "Tài Năng Trực Giác",
        keywords: ["Tâm linh", "Truyền cảm hứng", "Nhạy bén"],
        strengths: ["Trực giác", "Truyền cảm hứng", "Tâm linh"],
        challenges: ["Lo âu", "Áp lực", "Nhạy cảm quá"],
        advice: "Sử dụng tài năng trực giác để dẫn dắt người khác.",
        description: "Bạn có tài năng bẩm sinh về trực giác và tâm linh."
    },
    22: {
        title: "Tài Năng Kiến Tạo",
        keywords: ["Xây dựng", "Tầm nhìn", "Thực tiễn"],
        strengths: ["Kiến tạo", "Tầm nhìn", "Thực tiễn hóa"],
        challenges: ["Áp lực lớn", "Sợ thất bại", "Cô đơn"],
        advice: "Sử dụng tài năng kiến tạo để xây dựng di sản.",
        description: "Bạn có tài năng bẩm sinh trong việc kiến tạo lớn lao."
    },
    33: {
        title: "Tài Năng Chữa Lành",
        keywords: ["Yêu thương", "Chữa lành", "Từ bi"],
        strengths: ["Chữa lành", "Yêu thương", "Truyền cảm hứng"],
        challenges: ["Kiệt sức", "Quên bản thân", "Gánh nặng"],
        advice: "Sử dụng tài năng chữa lành để mang đến yêu thương.",
        description: "Bạn có tài năng bẩm sinh trong việc chữa lành và yêu thương."
    }
};

// Personal Year Meanings (Năm Cá Nhân)
export const personalYearMeanings: Record<number, NumberMeaning> = {
    1: {
        title: "Năm Khởi Đầu Mới",
        keywords: ["Bắt đầu", "Độc lập", "Hành động"],
        strengths: ["Năng lượng mới", "Cơ hội mới", "Sáng kiến"],
        challenges: ["Nóng vội", "Thiếu kiên nhẫn", "Cô đơn"],
        advice: "Đây là năm để bắt đầu những dự án mới và đi theo hướng độc lập.",
        description: "Chu kỳ 9 năm mới bắt đầu. Hãy gieo hạt cho tương lai."
    },
    2: {
        title: "Năm Hợp Tác",
        keywords: ["Kiên nhẫn", "Hợp tác", "Chi tiết"],
        strengths: ["Hợp tác tốt", "Phát triển mối quan hệ", "Kiên nhẫn"],
        challenges: ["Chậm tiến", "Phụ thuộc", "Nhạy cảm"],
        advice: "Năm để chậm lại, hợp tác và chú ý đến chi tiết.",
        description: "Hạt giống đang nảy mầm. Hãy kiên nhẫn và nuôi dưỡng."
    },
    3: {
        title: "Năm Sáng Tạo",
        keywords: ["Biểu đạt", "Xã hội", "Sáng tạo"],
        strengths: ["Sáng tạo cao", "Giao tiếp tốt", "Vui vẻ"],
        challenges: ["Phân tán", "Thiếu tập trung", "Hời hợt"],
        advice: "Năm để sáng tạo, giao tiếp và mở rộng mối quan hệ xã hội.",
        description: "Cây đang nở hoa. Hãy tận hưởng và biểu đạt bản thân."
    },
    4: {
        title: "Năm Xây Dựng",
        keywords: ["Làm việc", "Nền tảng", "Kỷ luật"],
        strengths: ["Xây dựng nền tảng", "Ổn định", "Thực tế"],
        challenges: ["Vất vả", "Hạn chế", "Căng thẳng"],
        advice: "Năm để làm việc chăm chỉ và xây dựng nền tảng vững chắc.",
        description: "Đang xây dựng gốc rễ. Hãy làm việc chăm chỉ và kiên trì."
    },
    5: {
        title: "Năm Thay Đổi",
        keywords: ["Tự do", "Thay đổi", "Trải nghiệm"],
        strengths: ["Tự do hơn", "Cơ hội mới", "Phiêu lưu"],
        challenges: ["Bất ổn", "Thiếu định hướng", "Phân tán"],
        advice: "Năm để đón nhận thay đổi và mở rộng trải nghiệm.",
        description: "Cây đang phát triển mạnh. Hãy mở rộng và khám phá."
    },
    6: {
        title: "Năm Gia Đình",
        keywords: ["Trách nhiệm", "Gia đình", "Hài hòa"],
        strengths: ["Gia đình hạnh phúc", "Trách nhiệm", "Yêu thương"],
        challenges: ["Gánh nặng", "Lo lắng", "Kiểm soát"],
        advice: "Năm để tập trung vào gia đình, nhà cửa và các mối quan hệ.",
        description: "Mùa ra hoa và kết trái. Hãy chăm sóc những gì quan trọng."
    },
    7: {
        title: "Năm Nội Tâm",
        keywords: ["Nghỉ ngơi", "Nghiên cứu", "Tâm linh"],
        strengths: ["Hiểu biết sâu", "Phát triển tâm linh", "Nghỉ ngơi"],
        challenges: ["Cô đơn", "Trầm tư", "Xa cách"],
        advice: "Năm để dừng lại, suy ngẫm và phát triển nội tâm.",
        description: "Mùa nghỉ ngơi. Hãy đi vào nội tâm và tìm kiếm sự thật."
    },
    8: {
        title: "Năm Thành Công",
        keywords: ["Thu hoạch", "Tài chính", "Quyền lực"],
        strengths: ["Thu hoạch thành quả", "Tài chính tốt", "Thành công"],
        challenges: ["Áp lực", "Vật chất hóa", "Mất cân bằng"],
        advice: "Năm để thu hoạch thành quả và đạt được thành công vật chất.",
        description: "Mùa thu hoạch. Hãy thu hoạch những gì đã gieo trồng."
    },
    9: {
        title: "Năm Hoàn Thành",
        keywords: ["Kết thúc", "Buông bỏ", "Chuẩn bị"],
        strengths: ["Hoàn thành chu kỳ", "Buông bỏ", "Sẵn sàng"],
        challenges: ["Mất mát", "Cảm xúc", "Khó buông bỏ"],
        advice: "Năm để hoàn thành, buông bỏ và chuẩn bị cho chu kỳ mới.",
        description: "Cuối chu kỳ 9 năm. Hãy buông bỏ và chuẩn bị khởi đầu mới."
    }
};

// Get meaning by indicator type
export function getMeaningByType(type: IndicatorType, number: number): NumberMeaning | null {
    const mappings: Record<IndicatorType, Record<number, NumberMeaning>> = {
        lifePath: lifePathMeanings,
        expression: expressionMeanings,
        soulUrge: soulUrgeMeanings,
        personality: personalityMeanings,
        birthday: birthdayMeanings,
        personalYear: personalYearMeanings
    };

    return mappings[type]?.[number] || null;
}

// Legacy export for backward compatibility
export const numerologyMeanings = lifePathMeanings;
export function getMeaning(number: number): NumberMeaning | null {
    return lifePathMeanings[number] || null;
}
