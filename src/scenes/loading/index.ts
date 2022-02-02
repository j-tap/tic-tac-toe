import { Scene } from 'phaser';

export class LoadingScene extends Scene {
	constructor() {
		super('loading-scene');
	}

	preload(): void {
		this.load.baseURL = 'assets/';

		// this.load.image('grid', 'sprites/grid.png');
		this.load.image('cross', 'sprites/cross.png');
		this.load.image('circle', 'sprites/circle.png');
	}

	create(): void {
		this.scene.start('main-scene');
	}
}
