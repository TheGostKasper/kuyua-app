import { useEffect } from "react";
import { useUserLocation } from "../contexts/UserLocationContext";
import MapComponent from "./MapContainer";

const UserLocationWrapper = () => {
  const { location, setLocation } = useUserLocation();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        alert(
          "Please allow access to your location in your browser settings and refresh the page if you want to center the location to yours."
        );
        console.error("Error Code = " + error.code + " - " + error.message);
        setLocation({
          latitude: 0,
          longitude: 0,
        });
      }
    );
  }, [setLocation]);

  if (!location) return <p>Loading...</p>;

  return <MapComponent />;
};

export default UserLocationWrapper;
