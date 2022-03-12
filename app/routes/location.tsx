import SectionMap from '~/components/sections/map/map';
import SectionLocation from '~/components/sections/location/location';
import Footer from '~/components/sections/footer/footer';

export default function Location() {
  return (
    <main className="rt-page-location">
      <SectionMap />
      <SectionLocation />
      <Footer/>
    </main>
  );
}
