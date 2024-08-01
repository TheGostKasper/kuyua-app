export interface UserLocation {
  latitude: number;
  longitude: number;
}

export interface LazyTableState<T> {
  first: number;
  rows: number;
  page: number;
  sortField: string;
  sortOrder: number;
  filters: T | any;
}

export interface Location {
  id: string;
  latitude: number;
  longitude: number;
  score: number;
  name: string;
  address: string;
}

export interface FetchLocationsParams {
  minScore?: number;
  maxScore?: number;
  search?: string;
  sortBy?: string;
  sortDirection?: string;
  page: number;
  limit: number;
}
