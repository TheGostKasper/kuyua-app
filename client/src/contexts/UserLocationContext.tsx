// UserLocationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserLocation } from '../types';

type UserLocationContextType = {
  location: UserLocation | null;
  setLocation: React.Dispatch<React.SetStateAction<UserLocation | null>>;
};

const UserLocationContext = createContext<UserLocationContextType | undefined>(undefined);

export const useUserLocation = () => {
  const context = useContext(UserLocationContext);
  if (!context) {
    throw new Error('useUserLocation must be used within a UserLocationProvider');
  }
  return context;
};

export const UserLocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<UserLocation | null>(null);

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      {children}
    </UserLocationContext.Provider>
  );
};
