let basePath = window.location.href;

if (process.env.NODE_ENV === 'production') {
    basePath = basePath.replace(/index.html/, '');
}

export const GameConstants = {
    BIG_FONT_SIZE: 32,
    FONT_SIZE: 18,
    EMAIL_ITEM_SIZE: 16,
    APP_NAME_SIZE: 16,

    COLORS: {
        PURPLE: "#7B538F",
        LIGHT_PURPLE: "#BD7FDB",
        DARK_PURPLE: "#4F355C",
        CREAM: "#FCEDC3",
        RED: "#FF2F4C",
        LIGHT_RED: "#FF7A8C",
        DARK_RED: "#803D46",
    },

    FPS: 60,

    SCREEN_WIDTH: 512,
    SCREEN_HEIGHT: 384,

    GAME_WIDTH: 1024,
    GAME_HEIGHT: 768,

    ICON_HEIGHT: 64,
    ICON_WIDTH: 64,

    SPATIAL_GRID_SIZE: 64,

    TYPES: {
        EMAIL_ITEMS: 'email-items',
        EMAIL_INBOX_ITEMS: 'email-inbox-items',
        INTERACTIVE: 'interactive',
        COMPUTER: 'computer',
        COMPUTER_APP: 'computer-app',
    },

    FINGER_WIDTH: 16,

    // rndIndex: (arr) => arr[Math.floor(Math.random() * (arr.length))],

    BASE_PATH: basePath,
    ASSETS_PATH: `${basePath}src/resources`,
};
