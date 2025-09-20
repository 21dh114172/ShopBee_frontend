// components/footer/Footer.tsx
import HeaderBot from "./HeaderBot";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-[#ee4d2d] text-white">
      <Navbar />
      <HeaderBot />
    </header>
  );
}
