import { GameConstants } from '../../../../../../constants/game-constants';
import { StaticEntity } from '../../../static-entity';
import { Assets } from '../../../../../assets/assets';
import { FootageLibraryItem } from './footage-library-item';

export class FootageLibrary extends StaticEntity {
  constructor(handler, footage, setActiveCallback) {
    super(handler, 0, 0);

    this.x = 0;
    this.y = 0;

    this.paddingX = GameConstants.GAME_WIDTH / 8;
    this.paddingY = GameConstants.GAME_HEIGHT / 16;

    this.width = GameConstants.GAME_WIDTH - (this.paddingX * 2);
    this.height = GameConstants.GAME_HEIGHT - (this.paddingY * 2);

    this.setActiveCallback = setActiveCallback;

    this.bounds = {
      x: 850,
      y: 64,
      width: 34,
      height: 30,
    };

    this.type = GameConstants.TYPES.FOOTAGE_ITEMS;
    this.hidden = false;

    this.footage = footage;
    this.assets = Assets.getAssets('footageLibrary');
    this.footageItems = [];

    this.initializeFootageItems();
  }

  tick() {
    //
  }

  initializeFootageItems() {
    let xx = this.paddingX + 16 + 4;
    let yy = this.paddingY + 118;

    const subjectColX = xx + 74

    for (let i = 0; i < this.footage.length; i += 1) {
      const video = this.footage[i];
      const bgColor = (i % 2) ? GameConstants.COLORS.RED : GameConstants.COLORS.PURPLE;
      const highlightColor = (i % 2) ? GameConstants.COLORS.LIGHT_RED : GameConstants.COLORS.LIGHT_PURPLE;

      const footageItem = new FootageLibraryItem(
        this.handler,
        xx,
        yy,
        this.width-8,
        34,
        video,
        bgColor,
        highlightColor,
        this.setHidden.bind(this)
      );

      this.handler.getEntityManager().addEntity(footageItem);
      this.footageItems.push(footageItem);

      yy += 36;
    }
  }

  drawFadedBackground(graphics) {
    graphics.globalAlpha = 0.4;
    graphics.fillStyle = 'black';
    graphics.fillRect(0, 0, GameConstants.GAME_WIDTH, GameConstants.GAME_HEIGHT);
    graphics.globalAlpha = 1;
  }

  render(graphics) {
    if (!this.hidden) {
      this.drawFadedBackground(graphics);
      this.drawLibrary(graphics);
      this.drawFootageItems(graphics);
    }

    // this.drawCollisionBounds(graphics);
  }

  setHidden(value) {
    this.hidden = value;

    for (let i = 0; i < this.footageItems.length; i += 1) {
      this.footageItems[i].hidden = value;
    }
  }

  drawFootageItems(graphics) {
    for (let i = 0; i < this.footageItems.length; i += 1) {
      this.footageItems[i].render(graphics);
    }
  }

  drawLibrary(graphics) {
    graphics.drawSprite(this.assets.bg, this.paddingX, this.paddingY, this.width, this.height);
  }

  wasClickedAt() {
    const entityManager = this.handler.getEntityManager();

    for (let i = 0; i < this.footageItems.length; i += 1) {
      entityManager.removeEntity(this.footageItems[i]);
    }

    const [ computer ] = this.handler.getEntityManager().getEntitiesByType(GameConstants.TYPES.COMPUTER);

    if (!computer) {
      throw new Error(`entity with type ${GameConstants.TYPES.COMPUTER} not found.`);
    }

    computer.activeAppName = null;

    entityManager.removeEntity(this);

    this.setActiveCallback();
  }
}
