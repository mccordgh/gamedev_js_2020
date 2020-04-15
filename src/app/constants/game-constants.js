const basePath = window.location.href;

export default {
    FONT_SIZE: 32,

    FPS: 60,

    SCREEN_WIDTH: 320,
    SCREEN_HEIGHT: 240,

    GAME_WIDTH: 1280,
    GAME_HEIGHT: 800,

    ICON_HEIGHT: 64,
    ICON_WIDTH: 64,

    SPATIAL_GRID_SIZE: 64,

    TYPES: {
        UI: 'ui',
    },

    FINGER_WIDTH: 16,

    // rndIndex: (arr) => arr[Math.floor(Math.random() * (arr.length))],

    BASE_PATH: basePath,
    ASSETS_PATH: `${basePath}src/resources`,
}