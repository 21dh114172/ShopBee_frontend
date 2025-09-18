import "./globals.css";
import Header from "@/components/Core/Header/Header";
import Navbar from "@/components/Core/Header/Navbar";
import Footer from "@/components/Core/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Header />
        <div className="container-responsive">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
