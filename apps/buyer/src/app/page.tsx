// apps/buyer/src/app/page.tsx

import Banner from "@/components/Home/Banner";
import CategoryGrid from "@/components/Home/CategoryGrid";
import ShortcutMenu from "@/components/Home/ShortcutMenu";


export default function HomePage() {
  return (
    <main>
      <Banner />
      <ShortcutMenu />
      <CategoryGrid />
    </main>
  );
}
