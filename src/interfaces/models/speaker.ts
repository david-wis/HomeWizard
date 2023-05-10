import type { Device } from '@/interfaces/device.interface';
import type { DeviceType } from '@/interfaces/deviceType.interface';
import { DevicesApi } from '@/api/devices.api';

export interface Speaker extends Device {
  id: string;
  type: DeviceType;
  name: string;
  state: {
    genre: string;
    status: string;
    volume: number;
  }
}

export const changeVolumeSpeaker = (speaker: Speaker, volume: number) => {
  return DevicesApi.executeAction(speaker.id, 'setVolume', [ volume ])
}

export const playSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'play')
}

export const toggleSpeaker = (speaker: Speaker) => {
  let res
  if (speaker.state.status === 'playing') {
    res = pauseSpeaker(speaker)
    speaker.state.status = 'paused'
  } else {
    res = playSpeaker(speaker)
    speaker.state.status = 'playing'
  }
  return res
}

export const pauseSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'pause')
}

export const stopSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'stop')
}

export const resumeSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'resume')
}

export const nextSongSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'nextSong')
}

export const previousSongSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'previousSong')
}

export const setGenreSpeaker = (speaker: Speaker, genre: string) => {
  return DevicesApi.executeAction(speaker.id, 'setGenre', [ genre ])
}

export const getPlaylistSpeaker = (speaker: Speaker) => {
  return DevicesApi.executeAction(speaker.id, 'getPlaylist')
}
