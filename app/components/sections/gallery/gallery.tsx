import ResponsivePicture from '~/components/ui/picture/responsive-picture';

export default function SectionGallery() {
  return (
    <section
      aria-labelledby="section-gallery-h2-title"
      className="rt-section-gallery"
    >
      <header className="content">
        <h2 id="section-gallery-h2-title" className="h2-title">
          Your Day at the Gallery
        </h2>
        <p className="h2-description">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </header>
      <ResponsivePicture name="image-grid-1" />
      <ResponsivePicture name="image-grid-2" />
      <ResponsivePicture name="image-grid-3" />
      <article className="inspired">
        <h3 className="h3-title">COME & BE INSPIRED</h3>
        <p className="h3-description">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </article>
    </section>
  );
}
