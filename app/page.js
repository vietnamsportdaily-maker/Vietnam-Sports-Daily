import { notFound } from "next/navigation";
import { getArticle } from "../../../lib/data";
import Link from "next/link";

export default async function Article({params}){
  const {slug}=await params;
  const a=getArticle(slug);
  if(!a) notFound();
  return <><div className="top"><div className="container topin"><span>VIETNAM SPORTS DAILY</span><Link href="/">← Trang chủ</Link></div></div>
  <main className="container"><article className="article">
    <div className="meta">{a.category} · {a.date} · {a.author}</div>
    <h1>{a.title}</h1><div className="lead">{a.excerpt}</div>
    <div className="articleHero"></div>
    <p>Vietnam Sports Daily cập nhật những thông tin mới nhất đến độc giả. Nội dung bài viết sẽ được biên tập và xuất bản trực tiếp từ hệ thống quản trị của tòa soạn.</p>
    <p>Đây là phiên bản nền tảng ban đầu, được thiết kế để có thể mở rộng thành một báo thể thao điện tử hoàn chỉnh với cơ sở dữ liệu, tài khoản biên tập viên, ảnh, video, chuyên mục và công cụ quản trị.</p>
    <p>Theo dõi Vietnam Sports Daily để cập nhật các thông tin mới nhất về bóng đá Việt Nam và thể thao quốc tế.</p>
  </article></main></>;
}