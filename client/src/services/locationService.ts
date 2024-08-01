import axios from "axios";
import { FetchLocationsParams, Location } from "../types";

const API_URL = "http://localhost:5555/api";

export const fetchLocationsRadius = async (
  latitude: number,
  longitude: number
): Promise<Location[]> => {
  const response = await axios.get(`${API_URL}/locations-radius`, {
    params: { latitude, longitude },
  });
  return response.data.locations;
};

export const fetchLocations = async ({
  minScore,
  maxScore,
  search,
  sortBy,
  sortDirection,
  page,
  limit,
}: FetchLocationsParams): Promise<{ locations: Location[]; total: number }> => {
  const { data } = await axios.get(`${API_URL}/locations`, {
    params: {
      minScore,
      maxScore,
      search,
      sortBy,
      sortDirection,
      page,
      limit,
    },
  });
  return data;
};
