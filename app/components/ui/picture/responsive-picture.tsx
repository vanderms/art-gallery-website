import { Media } from '~/lib/media';

export default function ResponsivePicture({ name }: { name: string }) {
  return (
    <picture className="image-container">
      <source
        srcSet={`/assets/desktop/${name}.jpg, /assets/desktop/${name}@2x.jpg 2x`}
        media={`(min-width: ${Media.Laptop}rem)`}
      />
      <source
        srcSet={`/assets/tablet/${name}.jpg, /assets/tablet/${name}@2x.jpg 2x`}
        media={`(min-width: ${Media.Tablet}rem)`}
      />
      <source
        srcSet={`/assets/mobile/${name}.jpg, /assets/mobile/${name}@2x.jpg 2x`}
      />
      <img className="bg-image" src={`/assets/mobile/${name}.jpg`} alt="" />
    </picture>
  );
}
