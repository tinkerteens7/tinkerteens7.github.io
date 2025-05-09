const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Rotate,
		C3.Behaviors.Sin,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Plugins.Keyboard,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Behaviors.MoveTo,
		C3.Plugins.Particles,
		C3.Plugins.Audio,
		C3.Plugins.Mouse,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Mouse.Cnds.OnObjectClicked
	];
};
self.C3_JsPropNameTable = [
	{depositphotos_298270728stockphotobeautifulcosmosastronomybackgroundstars: 0},
	{giphy: 0},
	{Rotate: 0},
	{asteroid: 0},
	{hp: 0},
	{Sine: 0},
	{monster: 0},
	{HpEnemy: 0},
	{spaceship: 0},
	{ScrollTo: 0},
	{"8Direction": 0},
	{spaceship2: 0},
	{Keyboard: 0},
	{Bullet: 0},
	{bullet: 0},
	{Text: 0},
	{Image: 0},
	{ufo: 0},
	{MoveTo: 0},
	{cow: 0},
	{cheese: 0},
	{Text2: 0},
	{giphy2: 0},
	{Particles: 0},
	{Audio: 0},
	{pngtreestarlightsonataasymphonyinspaceimage_: 0},
	{Image2: 0},
	{Image3: 0},
	{Image4: 0},
	{Mouse: 0},
	{hpEnemy: 0}
];

self.InstanceType = {
	depositphotos_298270728stockphotobeautifulcosmosastronomybackgroundstars: class extends self.ISpriteInstance {},
	giphy: class extends self.ISpriteInstance {},
	asteroid: class extends self.ISpriteInstance {},
	monster: class extends self.ISpriteInstance {},
	spaceship: class extends self.ISpriteInstance {},
	spaceship2: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	bullet: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Image: class extends self.ISpriteInstance {},
	ufo: class extends self.ISpriteInstance {},
	cow: class extends self.ISpriteInstance {},
	cheese: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	giphy2: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Audio: class extends self.IInstance {},
	pngtreestarlightsonataasymphonyinspaceimage_: class extends self.ISpriteInstance {},
	Image2: class extends self.ISpriteInstance {},
	Image3: class extends self.ISpriteInstance {},
	Image4: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {}
}