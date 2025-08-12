import { Application, Graphics } from 'pixi.js';

(async () => {
	const app = new Application();

	await app.init({
		resizeTo: window,
	});

	app.canvas.style.position = 'absolute';

	const rectangle = new Graphics()
		.rect(200, 200, 100, 150)
		.fill({ color: 0xffea00, alpha: 0.5 })
		.stroke({
			width: 8,
			color: 0x00ff00,
		});

	const star = new Graphics()
		.star(1000, 250, 12, 80, 2)
		.fill({ color: 0xffffff });

	app.stage.addChild(rectangle);
	app.stage.addChild(star);

	document.body.appendChild(app.canvas);
})();
