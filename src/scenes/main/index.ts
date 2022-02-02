import { Scene, GameObjects, Geom } from 'phaser';

export class MainScene extends Scene {
	constructor() {
		super('main-scene');
	}

	create(): void {
		// this.add.image(0, 0, 'grid');
        // f7f7ff
        // const arena = this.add.image(0, 0, 'arena');
        // Phaser.Display.Align.In.Center(arena, this.add.zone(400, 300, 800, 600));

        const { width, height } = this.renderer
        const arenaRect: Geom.Rectangle = new Phaser.Geom.Rectangle(0, 0, width, height);
        const graphicsArena = this.add.graphics({ fillStyle: { color: 0xf7f7ff } });

        graphicsArena.fillRectShape(arenaRect);
        graphicsArena.setInteractive();

        graphicsArena.on('pointerdown', function () {
            console.log('click');
        });
	}
}
