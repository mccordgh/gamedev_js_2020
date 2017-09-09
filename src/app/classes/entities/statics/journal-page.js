import { Assets } from '../../gfx/assets';
import { StaticEntity } from './static-entity';

export class JournalPage extends StaticEntity {
	constructor(handler, x, y, width, height, journal) {
		super(handler, x, y, width, height);
		// this.assets = Assets.getAssets('tiles');
		this.type = 'journal';
		this.bounds.x = 15;
		this.bounds.y = 15;
		this.bounds.width = this.width - 30;
		this.bounds.height = this.height - 30;
		this.journal = journal;
		this.triggered = false;
		console.log(this.journal)
	}

	tick(){
		//
	}

	render(_g) {
		// _g.myDrawImage(this.assets.exit,
		// 	this.x - this.handler.getGameCamera().getxOffset(),
		// 	this.y - this.handler.getGameCamera().getyOffset(),
		// 	this.width,
		// 	this.height);

		// ****** DRAW BOUNDING BOX DON'T DELETE!!
		_g.fillStyle = "yellow";
		_g.fillRect(this.bounds.x + this.x - this.handler.getGameCamera().getxOffset(), this.bounds.y + this.y - this.handler.getGameCamera().getyOffset(), this.bounds.width, this.bounds.height);
		// ****** DRAW BOUNDING BOX DON'T DELETE!!
	}

	triggerEntry() {
		if (this.triggered) return;

		this.triggered = true;

		this.journal.getText().forEach((entry) => {
			this.handler.getWorld().dialogue.addWords(this.journal.name, entry);
		});
	}
}
