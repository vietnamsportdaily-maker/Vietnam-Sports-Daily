import "./globals.css";

export const metadata = {
  title: "Vietnam Sports Daily",
  description: "Báo thể thao Việt Nam - Tin bóng đá, V-League, ĐT Việt Nam và thể thao quốc tế"
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}