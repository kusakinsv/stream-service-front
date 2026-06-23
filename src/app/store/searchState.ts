import { create } from "zustand/react";
import { subscribeWithSelector } from "zustand/middleware";

interface SearchState {
  currentSearchTrack: string;
  setCurrentSearchTrack: (value: string) => void;
}

export const useSearchStore = create<SearchState>()(
  subscribeWithSelector(set => ({
    currentSearchTrack: "",
    setCurrentSearchTrack: (track: string) => {
      set({currentSearchTrack: track})
    }
  })));