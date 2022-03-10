import { Media } from '~/lib/media';
import ButtonLink from '~/components/ui/buttons/link/button-link';

export default function SectionHero() {
  return (
    <header className="rt-section-hero">
      <div className="background">
        <picture className="bg-image-container">
          <source
            srcSet="/assets/desktop/image-hero.jpg, /assets/desktop/image-hero@2x.jpg 2x"
            media={`(min-width: ${Media.Laptop}rem)`}
          />
          <source
            srcSet="/assets/tablet/image-hero.jpg, /assets/tablet/image-hero@2x.jpg 2x"
            media={`(min-width: ${Media.Tablet}rem)`}
          />
          <source srcSet="/assets/mobile/image-hero.jpg, /assets/mobile/image-hero@2x.jpg 2x" />
          <img
            className="bg-image"
            src="/assets/mobile/image-hero.jpg"
            alt=""
          />
        </picture>
      </div>
      <div className="content">
        <h1 className="title">MODERN ART GALLERY</h1>
        <p className="description">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <ButtonLink to="/location" />
      </div>
    </header>
  );
}
