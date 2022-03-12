import Footer from '~/components/sections/footer/footer';
import SectionGallery from '~/components/sections/gallery/gallery';
import SectionHero from '~/components/sections/hero/hero';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return {
    'og:site_name': 'Frontend Mentor | Art Gallery Website',
    'og:title': 'Art Gallery Website',
    'og:description':
      'My solution to the challenge Art Gallery Website, by Frontend Mentor',
    'og:image':
      'https://art-gallery-website-fe370.pages.dev/assets/preview.jpg',
    'og:type': 'website',
    'og:image:type': 'image/jpeg',
    'og:url': 'https://art-gallery-website-fe370.pages.dev/',
  };
};

export default function Index() {
  return (
    <main>
      <SectionHero />
      <SectionGallery />
      <Footer />
    </main>
  );
}
