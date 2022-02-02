import { Game, Types } from 'phaser';
import { LoadingScene, MainScene } from './scenes';

const gameConfig: Types.Core.GameConfig = {
	title: 'Крестики-нолики',
	type: Phaser.WEBGL,
	parent: 'game',
	backgroundColor: '#000',
	scale: {
		mode: Phaser.Scale.ScaleModes.NONE,
		width: window.innerWidth,
		height: window.innerHeight,
	},
	physics: {},
	render: {},
	callbacks: {
		postBoot: () => {
			window.onChangedSize();
		},
	},
	canvasStyle: `display: block; width: 100%; height: 100%;`,
	autoFocus: true,
	audio: {
		disableWebAudio: false,
	},
	scene: [LoadingScene, MainScene],
};

window.onChangedSize = () => {
	if (window.game.isBooted) {
		setTimeout(() => {
			window.game.scale.resize(window.innerWidth, window.innerHeight);
			window.game.canvas.setAttribute(
				'style',
				`display: block; width: ${window.innerWidth}px; height: ${window.innerHeight}px;`,
			);
		}, 100);
	}
};
window.onresize = () => window.onChangedSize();

window.game = new Game(gameConfig);
