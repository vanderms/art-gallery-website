import ButtonLink from '~/components/ui/buttons/link/button-link';
import LeafletMap from '~/components/ui/map/leaflet-map';

export default function SectionMap() {
  return (
    <section className="rt-section-map">
      <ButtonLink to='/'/>
      <LeafletMap />
    </section>
  );
}
