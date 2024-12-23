'use client'

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface GeolocationContextType {
  latitude: number | null;
  longitude: number | null;
}

const GeolocationContext = createContext<GeolocationContextType | undefined>(
  undefined
);

export const GeolocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error: GeolocationPositionError) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported by your browser");
    }
  }, []);

  return (
    <GeolocationContext.Provider value={{ latitude, longitude }}>
      {children}
    </GeolocationContext.Provider>
  );
};

export const useGeolocation = (): GeolocationContextType => {
  const context = useContext(GeolocationContext);
  if (context === undefined) {
    throw new Error("useGeolocation must be used within a GeolocationProvider");
  }
  return context;
};
