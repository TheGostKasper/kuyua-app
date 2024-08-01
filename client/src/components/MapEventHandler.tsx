import { debounce } from "lodash";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

import { useMap } from "react-leaflet";
import { UserLocation } from "../types";

export const MapEventHandler = ({
  setLocation,
}: {
  setLocation: Dispatch<SetStateAction<UserLocation | null>>;
}) => {
  const map = useMap();

  const handleMoveEnd = useCallback(
    debounce(() => {
      const center = map.getCenter();
      setLocation({ latitude: center.lat, longitude: center.lng });
    }, 500),
    [map]
  );

  useEffect(() => {
    map.on("dragend", handleMoveEnd);
    return () => {
      map.off("dragend", handleMoveEnd);
    };
  }, [map, handleMoveEnd]);

  return null;
};

export const MapSetViewHandler = ({
  location,
}: {
  location: UserLocation | null;
}) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView([location.latitude, location.longitude], 5);
    }
  }, [map, location]);

  return null;
};
