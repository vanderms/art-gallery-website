import ResponsivePicture from '~/components/ui/picture/responsive-picture';
import ButtonLink from '~/components/ui/buttons/link/button-link';

export default function SectionHero() {
  return (
    <header className="rt-section-hero">
      <div className="background">
        <ResponsivePicture name="image-hero" />
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
