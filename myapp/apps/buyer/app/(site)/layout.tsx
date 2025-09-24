import Footer from "../../components/Core/Footer/Footer";
import Header from "../../components/Core/Header/Header";
import Banner from "../../components/Home/Banner";
import PromoPopup from "../../components/Home/PromoPopup";
import ShortcutMenu from "../../components/Home/ShortcutMenu";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <PromoPopup
        imageUrl="/home/image_popup.png"
        ctaHref="/collections/hot-sale"
        widthClass="h-full w-[438px]"
      />
      <Banner />
      <ShortcutMenu />
      <div className="bg-util-bg pt-2.5">
        <div className="container-responsive">{children}</div>
      </div>
      <Footer />
    </>
  );
}
