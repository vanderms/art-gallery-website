import Footer from "~/components/sections/footer/footer";
import SectionGallery from "~/components/sections/gallery/gallery";
import SectionHero from "~/components/sections/hero/hero";

export default function Index() {
  return (
    <main>
      <SectionHero/>
      <SectionGallery/>
      <Footer/>
    </main>
  );
}
