import { GameConstants } from '../../constants/game-constants';

export class SoundManager {
  constructor(handler) {
    this.handler = handler;

    this.sources = {
      // bgm: {
      //   source: this.getMusic('bgm'),
      //   loops: true,
      // },
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
      speak1: {
        source: this.getMusic('speak-1'),
        loops: false,
      },
      speak2: {
        source: this.getMusic('speak-2'),
        loops: false,
      },
      speak3: {
        source: this.getMusic('speak-3'),
        loops: false,
      },
      roboSpeak1: {
        source: this.getMusic('robo-speak-1'),
        loops: false,
      },
      roboSpeak2: {
        source: this.getMusic('robo-speak-2'),
        loops: false,
      },
      roboSpeak3: {
        source: this.getMusic('robo-speak-3'),
        loops: false,
      },
    };
  }

  getMusic(name) {
    return `${GameConstants.MUSIC_PATH}/${name}.mp3`;
  }

  stop() {
    if (!this.lastSoundPlayed) {
      return;
    }

    this.stopSound(this.lastSoundPlayed);
  }

  stopSound(sound) {
    sound.pause();
    sound.currentTime = 0;
    sound.src = "";
  }

  initSound(source, volume) {
    const sound = new Audio(source.source);
    sound.loop = source.loops;
    sound.volume = volume;

    return sound;
  }

  speak(isRobot = false) {
    if (isRobot) {
      this.play('roboSpeak' + rndInt(1, 3), 0.35);
    } else {
      this.play('speak' + rndInt(1, 3), 0.2);
    }
  }

  play(name, volume = 0.8) {
    const source = this.sources[name];

    if (name === 'bgm'&& this.handler.getEntityManager()) {
      const radio = this.handler.getEntityManager().entities.find(entity => entity.isRadio);

      if (radio) {
        radio.state = radio.states.OFF;
      }

      return;
    }

    if (source) {
      try {
        if (this.lastSoundPlayed && source.loops) {
          this.stopSound(this.lastSoundPlayed);
        }

        const sound = this.initSound(source, volume);
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
