const basePath = window.location.href;

export default {
    FONT_SIZE: 32,

    FPS: 60,

    SCREEN_WIDTH: 512,
    SCREEN_HEIGHT: 384,

    GAME_WIDTH: 1024,
    GAME_HEIGHT: 768,

    ICON_HEIGHT: 32,
    ICON_WIDTH: 32,

    SPATIAL_GRID_SIZE: 64,

    TYPES: {
        UI: 'ui',
    },

    FINGER_WIDTH: 16,

    // rndIndex: (arr) => arr[Math.floor(Math.random() * (arr.length))],

    BASE_PATH: basePath,
    ASSETS_PATH: `${basePath}src/resources`,
}