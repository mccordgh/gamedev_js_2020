import { GameConstants } from '../../constants/game-constants';

export class SoundManager {
  constructor(handler) {
    this.handler = handler;

    this.channels = {
      music: new Audio(),
      sfx: new Audio(),
    }

    this.sources = {
      bgm: {
        type: 'music',
        source: this.getMusic('bgm'),
        loops: true,
      },
      station1: {
        type: 'music',
        source: this.getMusic('station1'),
        loops: true,
      },
      station2: {
        type: 'music',
        source: this.getMusic('station2'),
        loops: true,
      },
      station3: {
        type: 'music',
        source: this.getMusic('station3'),
        loops: true,
      },
      phoneRinging: {
        type: 'sfx',
        source: this.getMusic('phone-ringing'),
        loops: false,
      },
      dialing: {
        type: 'sfx',
        source: this.getMusic('dialing'),
        loops: false,
      },
      speak1: {
        type: 'sfx',
        source: this.getMusic('speak-1'),
        loops: false,
      },
      speak2: {
        type: 'sfx',
        source: this.getMusic('speak-2'),
        loops: false,
      },
      speak3: {
        type: 'sfx',
        source: this.getMusic('speak-3'),
        loops: false,
      },
      roboSpeak1: {
        type: 'sfx',
        source: this.getMusic('robo-speak-1'),
        loops: false,
      },
      roboSpeak2: {
        type: 'sfx',
        source: this.getMusic('robo-speak-2'),
        loops: false,
      },
      roboSpeak3: {
        type: 'sfx',
        source: this.getMusic('robo-speak-3'),
        loops: false,
      },
    };
  }

  getMusic(name) {
    return `${GameConstants.MUSIC_PATH}/${name}.mp3`;
  }

  getChannelByType(type) {
    return type === 'music' ? this.channels.music : this.channels.sfx;
  }

  initSound(source, volume) {
    const sound = this.getChannelByType(source.type);

    sound.pause();
    sound.currentTime = 0;
    sound.src = source.source;
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

    if (source) {
      try {
        const sound = this.initSound(source, volume);

        sound.play();

        return sound;
      } catch (e) {
        throw new Error(e);
      }
    }

    throw new Error(`Sound with name "${name}" not found.`);
  }
}
