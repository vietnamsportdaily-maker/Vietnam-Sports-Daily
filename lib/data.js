export const articles = [
  {slug:"dt-viet-nam-san-sang-cho-tran-dau-moi",category:"ĐT Việt Nam",title:"ĐT Việt Nam sẵn sàng cho chặng đường mới",excerpt:"Những thông tin đáng chú ý quanh đội tuyển Việt Nam trước loạt trận quan trọng.",author:"Vietnam Sports Daily",date:"24/09/2026"},
  {slug:"v-league-cuoc-dua-dang-nong",category:"V-League",title:"V-League: Cuộc đua đang nóng lên từng ngày",excerpt:"Các đội bóng đang tăng tốc trong giai đoạn then chốt của mùa giải.",author:"Lê Phan",date:"24/09/2026"},
  {slug:"patrik-le-giang-va-hanh-trinh-moi",category:"ĐT Việt Nam",title:"Patrik Lê Giang và hành trình mới cùng đội tuyển",excerpt:"Thủ môn Việt kiều tiếp tục nhận được sự chú ý trong đợt tập trung.",author:"Vietnam Sports Daily",date:"23/09/2026"},
  {slug:"u21-viet-nam-nhung-tai-nang-dang-chu-y",category:"Trẻ",title:"U21 Việt Nam: Những tài năng đáng chú ý",excerpt:"Lứa cầu thủ trẻ tiếp tục cho thấy nhiều tín hiệu tích cực.",author:"Lê Phan",date:"23/09/2026"}
];

export function getArticle(slug){ return articles.find(a=>a.slug===slug); }