// apps/buyer/src/app/page.tsx

import Banner from "@/components/Home/Banner";
import CategoryFooterGrid from "@/components/Home/CategoryFooterGrid";
import CategoryGrid from "@/components/Home/CategoryGrid";
import FlashSaleSection from "@/components/Home/FlashSaleSection";
import KeywordCloudSection from "@/components/Home/KeywordCloudSection";
import ShopeeMallSection from "@/components/Home/ShopeeMallSection";
import ShortcutMenu from "@/components/Home/ShortcutMenu";
import TextInfoSection from "@/components/Home/TextInfoSection";
import TodaySuggestionSection from "@/components/Home/TodaySuggestionSection";
import TopSearchSection from "@/components/Home/TopSearchSection";

export default function HomePage() {
  return (
    <main>
      <Banner />
      <ShortcutMenu />
      <CategoryGrid />
      <FlashSaleSection />
      <ShopeeMallSection />
      <TopSearchSection />
      <TodaySuggestionSection />
      <TextInfoSection />
      <KeywordCloudSection />
      <CategoryFooterGrid />
    </main>
  );
}
