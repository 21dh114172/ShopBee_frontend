// components/footer/Footer.tsx
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="mx-auto w-full laptop:w-[90%] desktop:w-[80%">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
}
