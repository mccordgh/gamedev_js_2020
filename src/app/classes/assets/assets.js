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

/* CURSORS */
const cursor = new Assets('cursor', 'cursor.png');
cursor.pointer = cursor.sheet.crop(0, 0, 49, 56);
const cursor2 = new Assets('cursor2', 'cursor2.png');
cursor2.pointer = cursor2.sheet.crop(0, 0, 32, 32);
const whiteCursor = new Assets('whiteCursor', 'white-cursor.png');
whiteCursor.pointer = whiteCursor.sheet.crop(0, 0, 32, 32);
const hand = new Assets('hand', 'hand.png');
hand.pointer = hand.sheet.crop(0, 0, 64, 64);
const hand2 = new Assets('hand2', 'hand2.png');
hand2.pointer = hand2.sheet.crop(0, 0, 32, 32);

/* Background */
const bg = new Assets('background', 'bg.png');
bg.image = bg.sheet.crop(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);

/* ICONS */
const email = new Assets('email', 'email.png');
email.icon = email.sheet.crop(0, 0, GameConstants.ICON_WIDTH, GameConstants.ICON_HEIGHT);
createAnimationFor(email, 'loading', {
    speed: 240,
    row: 0,
    col: 0,
    length: 10,
    width: GameConstants.ICON_WIDTH,
    height: GameConstants.ICON_HEIGHT,
});

const os = new Assets('os', 'jam-os-bootup.png');
createAnimationFor(os, 'booting', {
    speed: 300,
    row: 0,
    col: 0,
    length: 10,
    width: GameConstants.SCREEN_WIDTH,
    height: GameConstants.SCREEN_HEIGHT,
});

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
