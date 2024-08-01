import { useQuery } from "@tanstack/react-query";
import {
  fetchLocations,
  fetchLocationsRadius,
} from "../services/locationService";
import { FetchLocationsParams } from "../types";

export const useFetchLocations = (params: FetchLocationsParams) => {
  return useQuery({
    queryKey: ["locations", params],
    queryFn: () => fetchLocations(params),
  });
};

export const useFetchLocationsRadius = (
  latitude: number,
  longitude: number
) => {
  return useQuery({
    queryKey: ["locations-radius", latitude, longitude],
    queryFn: () => fetchLocationsRadius(latitude, longitude),
    enabled: !!latitude && !!longitude,
  });
};
