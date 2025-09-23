import Footer from "../../components/Core/Footer/Footer";
import Header from "../../components/Core/Header/Header";
import PromoPopup from "../../components/Home/PromoPopup";


export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <PromoPopup
        imageUrl="/images/promo-elmich.jpg"
        ctaHref="/collections/hot-sale"
        widthClass="w-[740px] max-w-[92vw]"
      />
      <div className="container-responsive">{children}</div>
      <Footer />
    </>
  );
}
