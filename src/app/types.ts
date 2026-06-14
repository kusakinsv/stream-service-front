export type AudioItem = {
  url: string;
  name: string;
}

export type SearchedTrack = {
  url: string;
  name?: null | string;
}

export type MusicTrack = {
  url: string;
  name: string;
  duration?: null | string;
}

export type AudioTrackData = {
  url: string,
  name: string,
  isValid: boolean;
  duration: null | number;
  audioElem: null | HTMLAudioElement;
}