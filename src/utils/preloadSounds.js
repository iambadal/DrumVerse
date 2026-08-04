export const preloadSounds = (pads) => {
  const audioMap = {};

  pads.forEach((pad) => {
    const audio = new Audio(pad.sound);
    audio.preload = "auto";
    audio.load();

    audioMap[pad.key] = audio;
  });

  return audioMap;
};