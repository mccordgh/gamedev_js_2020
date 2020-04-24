import { GameConstants } from '../../constants/game-constants';

export class SoundManager {
  constructor() {
    this.sources = {
      bgm: this.getMusic('bgm'),
      station1: this.getMusic('station1'),
      station2: this.getMusic('station2'),
      station3: this.getMusic('station3'),
    };

    const bgm = this.sources.bgm;
    this.lastSoundPlayed = this.play('bgm');
  }

  getMusic(name) {
    return `${GameConstants.MUSIC_PATH}/${name}.mp3`;
  }

  stopSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.src = "";
  }

  initSound(source) {
    const sound = new Audio(source);
    sound.loop = true;

    return sound;
  }

  play(name) {
    const source = this.sources[name];

    if (source) {
      try {
        if (this.lastSoundPlayed) {
          this.stopSound(this.lastSoundPlayed);
        }

        const sound = this.initSound(source);
        sound.play();
        this.lastSoundPlayed = sound;

        return sound;
      } catch (e) {
        throw new Error(e);
      }

    }

    throw new Error(`Sound with name "${name}" not found.`);
  }
}
