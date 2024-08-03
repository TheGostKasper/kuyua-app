import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { useUserLocation } from "../contexts/UserLocationContext";
import { useFetchLocationsRadius } from "../hooks/useFetchLocation";
import { MapEventHandler, MapSetViewHandler } from "./MapEventHandler";
import MarkerContainer from "./Marker";
import { Error, Loading } from "../shared/loadingError";

const MapComponent = () => {
  const { location, setLocation } = useUserLocation();

  const {
    data: locations,
    isError,
    // isLoading,
  } = useFetchLocationsRadius(
    location?.latitude || 0,
    location?.longitude || 0
  );

  if (!location) return <Loading message="Loading Map..." />;
  // if (isLoading) return <Loading message="Loading Locations..." />; // add it back when you fix the flickering issue
  if (isError) return <Error message="Failed to load locations." />;
  return (
    <div style={{ minHeight: "600px", height: "100%" }}>
      <MapContainer
        center={[location.latitude, location.longitude]}
        zoom={4}
        maxZoom={13}
        minZoom={2}
        style={{ height: "600px", width: "100%" }}
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
