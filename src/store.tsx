// store.ts
import { create } from 'zustand';
import { Coordinates } from './types/Weather';


interface SearchStore {
    query: string;
    setQuery: (query: string) => void;
    coordinates: Coordinates | null;
    setCoordinates: (coordinates: Coordinates | null) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    query: '',
    setQuery: (query: string) => set({ query }), // Update the query in the store
    coordinates: null, // Initial coordinates are null
    setCoordinates: (coordinates: Coordinates | null) => set({ coordinates }), // Update coordinates in the store
}));
