import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LocationData } from "./types/location";

interface StoreState {
    locations: LocationData[]; 
    setLocations: (locations: LocationData[]) => void; 
}

export const useStore = create(
  persist<StoreState>(
    (set) => ({
      locations: [],

      setLocations: (locations) => set(() => ({ locations })),
    }),
    {
      name: "location-store",
    }
  )
);
