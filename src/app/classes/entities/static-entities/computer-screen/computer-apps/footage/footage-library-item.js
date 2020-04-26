import { StaticEntity } from '../../../static-entity';
import { GameConstants } from '../../../../../../constants/game-constants';

export class FootageLibraryItem extends StaticEntity {
  constructor(handler, x, y, width, height, video, bgColor, highlightColor, setHiddenCallback) {
    super(handler, x, y);

    this.width = width;
    this.height = height;
    this.video = video;
    this.bgColor = bgColor;
    this.highlightColor = highlightColor;
    this.hovered = false;

    this.bounds = {
      x: -16,
      y: -26,
      width: this.width,
      height: this.height,
    };

    this.type = GameConstants.TYPES.FOOTAGE_LIBRARY_ITEMS;
    this.setHiddenCallback = setHiddenCallback;

    this.hidden = false;
  }

  tick() {
    //
  }

  render(graphics) {
    if (!this.hidden) {
      const { x, y, width, height } = this;

      graphics.fillStyle = this.hovered ? this.highlightColor : this.bgColor;

      graphics.fillRect(x - 16, y - 26, width, height);
      graphics.fillStyle = 'black';

      graphics.drawText(
        this.video.video.who,
        this.x,
        this.y - 4,
        'white',
        false,
        GameConstants.EMAIL_ITEM_SIZE,
      );

      graphics.drawText(
        this.video.video.status || 'N/A (Please watch video)',
        this.x + 224,
        this.y - 4,
        'white',
        false,
        GameConstants.EMAIL_ITEM_SIZE,
      );

      //draw collision bounds for debugging
      // graphics.fillStyle = "yellow";
      // graphics.fillRect(this.x + this.bounds.x, this.y + this.bounds.y, this.bounds.width, this.bounds.height)

      // if (this.hovered) {
      //   graphics.fillStyle = 'black';
      //   graphics.globalAlpha = 1;
      //   graphics.fillRect(x - 16, y - 26, width, height);
      //   graphics.globalAlpha = 1;
      // }
    }
  }

  wasHoveredAt(x, y) {
    this.hovered = true;
  }

  wasBlurred() {
    this.hovered = false;
  }

  wasClickedAt() {
    this.setHiddenCallback(true);

    this.video.isViewed = true;
    this.video.setHiddenCallback = this.setHiddenCallback;

    this.handler.getEntityManager().addEntity(this.video);
  }
}
