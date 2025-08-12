import {
	Application,
	Graphics,
	Text,
	TextStyle,
	Assets,
	Sprite,
} from 'pixi.js';

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

	rectangle.eventMode = 'static';
	rectangle.cursor = 'pointer';
	rectangle.on('mousedown', moveRect);

	function moveRect() {
		rectangle.x += 10;
		rectangle.y += 10;
	}

	const star = new Graphics()
		.star(1000, 250, 12, 80, 2)
		.fill({ color: 0xffffff });

	app.stage.addChild(rectangle);
	app.stage.addChild(star);

	const style = new TextStyle({
		fontSize: 60,
		fontWeight: 'bold',
		fill: 0xffffff,
	});

	const text = new Text({
		text: 'Hello World',
		style,
	});

	text.position.set(350, 100);

	app.stage.addChild(text);

	const texture = await Assets.load('/images/logo.jpg');

	const sprite = new Sprite(texture);
	sprite.x = 100;
	sprite.y = 100;
	sprite.width = 200;
	sprite.height = 200;

	app.stage.addChild(sprite);

	const circle = new Graphics();

	app.ticker.add(() => {
		circle
			.circle(
				Math.random() * app.screen.width,
				Math.random() * app.screen.height,
				5
			)
			.fill({ color: 0xffffff });
		app.stage.addChild(circle);
	});

	document.body.appendChild(app.canvas);
})();
