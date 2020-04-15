import { Animation } from './animation';
import { ImageLoader } from "./image-loader";
import { SpriteSheet } from './sprite-sheet';

import { GameConstants } from '../../constants/game-constants';

const assets = {};

export class Assets {
    constructor (name, path) {
        assets[name] = this;
        this.name = name;
        this.path = `${GameConstants.ASSETS_PATH}/${path}`;
        this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
        this.animations = {};
    }

    static getAssets(name) {
        return assets[name];
    }

    addAnimation(name, animation) {
        this.animations[name] = animation;
    }
}

const createAnimationFor = (asset, name, data) => {
    data.frames = [];

    for (let i = data.col; i < (data.length + data.col); i += 1) {
        data.frames.push({
            frame: asset.sheet.crop(
                data.width * i, data.height * data.row, data.width, data.height
            ),
            speed: data.speed,
        });
    }

    asset.addAnimation(name, new Animation(data.frames));
}

/* CURSOR */
const cursor = new Assets('cursor', 'cursor.png');
cursor.pointer = cursor.sheet.crop(0, 0, 49, 56);

/* Background */
const bg = new Assets('background', 'bg.png');
bg.image = bg.sheet.crop(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);

/* MONSTERS */
// const skeleton = new Assets('skeleton', 'zombie_n_skeleton2.png');
// createAnimationFor(skeleton, 'walk_left', {
//     speed: 200,
//     row: 1,
//     col: 6,
//     length: 3,
//     width: 32,
//     height: 64,
// });
