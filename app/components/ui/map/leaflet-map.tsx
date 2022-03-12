import { useRef, useEffect } from 'react';

export function LeafletCDN() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      ></script>
    </>
  );
}

export default function LeafletMap() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const L = typeof document !== 'undefined' ? window.L : null;

    if (L) {
      const location: any = [41.4810308, -71.3123195];
      const map = L.map(container.current as any, {
        zoomControl: false,
      }).setView(location, 15);

      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            'pk.eyJ1IjoidmFuZGVybXMiLCJhIjoiY2wwbjRxc3kwMWN2MTNrbjVqdmZta2RjNiJ9.IKMvizZ9vPC-NHT1bRDXCA',
        }
      ).addTo(map);

      const customIcon = L.icon({
        iconUrl: '/assets/icon-location.svg',
        iconSize: [66, 88],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      });

      L.marker(location, { icon: customIcon }).addTo(map);
    }
  }, []);

  return <div className="map-container" ref={container} />;
}
