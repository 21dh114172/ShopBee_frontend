import AuthHeader from "../../components/Auth/AuthHeader";
import Footer from "../../components/Core/Footer/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      <main className="min-h-screen bg-gray-50">{children}</main>
      <Footer />
    </>
  );
}
