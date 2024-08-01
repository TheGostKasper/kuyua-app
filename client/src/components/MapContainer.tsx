import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useUserLocation } from "../contexts/UserLocationContext";
import { useFetchLocationsRadius } from "../hooks/useFetchLocation";
import { MapEventHandler, MapSetViewHandler } from "./MapEventHandler";
import MarkerContainer from "./Marker";

const MapComponent = () => {
  const { location, setLocation } = useUserLocation();

  const { data: locations } = useFetchLocationsRadius(
    location?.latitude || 0,
    location?.longitude || 0
  );

  if (!location) return <p>Loading Map...</p>;

  return (
    <div style={{ height: "100%" }}>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={5}
        maxZoom={8}
        minZoom={2}
        style={{ height: "700px", width: "100%" }}
        wheelDebounceTime={500}
      >
        <MapSetViewHandler location={location} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {locations?.map((l) => (
          <MarkerContainer location={l} key={l.id} />
        ))}

        <MapEventHandler setLocation={setLocation} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
