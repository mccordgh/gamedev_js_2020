import { GameConstants } from '../../constants/game-constants';

export class SoundManager {
  constructor() {
    this.sources = {
      bgm: {
        source: this.getMusic('bgm'),
        loops: true,
      },
      station1: {
        source: this.getMusic('station1'),
        loops: true,
      },
      station2: {
        source: this.getMusic('station2'),
        loops: true,
      },
      station3: {
        source: this.getMusic('station3'),
        loops: true,
      },
      phoneRinging: {
        source: this.getMusic('phone-ringing'),
        loops: false,
      },
      dialing: {
        source: this.getMusic('dialing'),
        loops: false,
      },
    };

    const bgm = this.sources.bgm;
    this.lastSoundPlayed = null;
    // this.lastSoundPlayed = this.play('bgm');
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
    const sound = new Audio(source.source);
    sound.loop = source.loops;

    return sound;
  }

  play(name) {
    const source = this.sources[name];

    if (source) {
      try {
        if (this.lastSoundPlayed && source.loops) {
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
