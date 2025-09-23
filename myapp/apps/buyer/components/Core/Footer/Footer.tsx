// components/footer/Footer.tsx
import FooterTop from "./FooterTop";
import FooterMiddle from "./FooterMiddle";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="container-responsive">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </footer>
  );
}
