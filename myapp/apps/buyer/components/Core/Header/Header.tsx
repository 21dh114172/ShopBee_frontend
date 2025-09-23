import HeaderBot from "./HeaderBot";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="text-white bg-gradient-to-t from-[#f63] to-[#f53d2d]">
      <Navbar />
      <HeaderBot />
    </header>
  );
}
