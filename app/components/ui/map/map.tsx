import { leaflet } from '~/lib/leafleft';
import { useRef, useEffect } from 'react';

export default function Map() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any = null;
    const mapRoot = document.createElement('div');
    mapRoot.className = 'map-root';
    container.current?.appendChild(mapRoot);

    if (leaflet) {
      const location: any = [41.4810308, -71.3123195];

      map = leaflet.map(mapRoot).setView(location, 15);
      leaflet
        .tileLayer(
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
        )
        .addTo(map);

        const customIcon = leaflet.icon({
          iconUrl: '/assets/icon-location.svg',
          iconSize: [66, 88],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],          
      });

      leaflet.marker(location, {icon: customIcon }).addTo(map);
    }
    return () => {
      if (map) {
        map.remove();
      }
      mapRoot.remove();
    };
  }, []);

  return <div className="rt-leaflet-map" ref={container}></div>;
}
