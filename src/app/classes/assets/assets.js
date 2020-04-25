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
const bg = new Assets('background', 'gameJamBg.png');
bg.image = bg.sheet.crop(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);

/* ICONS */
const email = new Assets('email', 'email.png');
email.icon = email.sheet.crop(0, 0, GameConstants.ICON_WIDTH, GameConstants.ICON_HEIGHT);
createAnimationFor(email, 'loading', {
    speed: 120,
    row: 0,
    col: 0,
    length: 10,
    width: GameConstants.ICON_WIDTH,
    height: GameConstants.ICON_HEIGHT,
});

const footage = new Assets('footage', 'footage.png');
footage.icon = footage.sheet.crop(0, 0, GameConstants.ICON_WIDTH, GameConstants.ICON_HEIGHT);
createAnimationFor(footage, 'loading', {
    speed: 1,
    row: 0,
    col: 0,
    length: 64,
    width: GameConstants.ICON_WIDTH,
    height: GameConstants.ICON_HEIGHT,
});

const bigFootage = new Assets('bigFootage', 'big-footage.png');
bigFootage.playButton = bigFootage.sheet.crop(0, 0, GameConstants.SCREEN_WIDTH, GameConstants.SCREEN_HEIGHT);

const johnDies = new Assets('johnDies', 'john-dies-black.png');
createAnimationFor(johnDies, 'playing', {
    speed: 100,
    row: 0,
    col: 0,
    length: 19,
    width: GameConstants.SCREEN_WIDTH,
    height: GameConstants.SCREEN_HEIGHT,
});

const johnLives = new Assets('johnLives', 'john-lives.png');
createAnimationFor(johnLives, 'playing', {
    speed: 100,
    row: 0,
    col: 0,
    length: 19,
    width: GameConstants.SCREEN_WIDTH,
    height: GameConstants.SCREEN_HEIGHT,
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

const inbox = new Assets('inbox', 'inbox-bg.png');
inbox.bg = inbox.sheet.crop(0, 0, 768, 672);

const footageLibrary = new Assets('footageLibrary', 'footage-library-bg.png');
footageLibrary.bg = footageLibrary.sheet.crop(0, 0, 768, 672);

const radio = new Assets('radio', 'radio.png');
radio.off = radio.sheet.crop(0, 0, GameConstants.RADIO_WIDTH, GameConstants.RADIO_HEIGHT);
radio.station1 = radio.sheet.crop(GameConstants.RADIO_WIDTH, 0, GameConstants.RADIO_WIDTH, GameConstants.RADIO_HEIGHT);
radio.station2 = radio.sheet.crop(GameConstants.RADIO_WIDTH * 2, 0, GameConstants.RADIO_WIDTH, GameConstants.RADIO_HEIGHT);
radio.station3 = radio.sheet.crop(GameConstants.RADIO_WIDTH * 3, 0, GameConstants.RADIO_WIDTH, GameConstants.RADIO_HEIGHT);

const radioBanner = new Assets('radioBanner', 'radio-banner.png');
radioBanner.img = radioBanner.sheet.crop(0, 0, 225, 225);
