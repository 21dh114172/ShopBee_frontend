import CategoryFooterGrid from "../../components/Home/CategoryFooterGrid";
import CategoryGrid from "../../components/Home/CategoryGrid";
import FlashSaleSection from "../../components/Home/FlashSaleSection";
import KeywordCloudSection from "../../components/Home/KeywordCloudSection";
import ShopeeMallSection from "../../components/Home/ShopeeMallSection";
import TextInfoSection from "../../components/Home/TextInfoSection";
import TodaySuggestionSection from "../../components/Home/TodaySuggestionSection";
import TopSearchSection from "../../components/Home/TopSearchSection";

export default function HomePage() {
  return (
    <main>
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
