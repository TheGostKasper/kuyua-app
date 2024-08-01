import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

import { Location } from "../types";
import { useState } from "react";

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MarkerContainer = ({ location }: { location: Location }) => {
  const [, setPopupInfo] = useState<any>(null);

  return (
    <Marker
      position={[location.latitude, location.longitude]}
      riseOnHover
      icon={customIcon}
      eventHandlers={{
        click: () => setPopupInfo(location),
      }}
    >
      <Popup>
        <strong>{location.name}</strong>
        <br />
        {location.address}
        <br />
        Score: {location.score}
      </Popup>
    </Marker>
  );
};

export default MarkerContainer;
