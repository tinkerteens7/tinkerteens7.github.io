const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Mouse.Exps.X,
		C3.Plugins.Mouse.Exps.Y,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar
	];
};
self.C3_JsPropNameTable = [
	{приціл_: 0},
	{Миша: 0},
	{hauntedhousehalloweenbackgroundfreevector: 0},
	{lollipop: 0},
	{sweet: 0},
	{candy: 0},
	{toffee: 0},
	{candybag: 0},
	{ghost: 0},
	{ScoreТекст: 0},
	{halloween: 0},
	{TimerТекст: 0},
	{F_294648898_SKZQkDVBXhfIgxuuTTcEwJBTBCVmbwXu: 0},
	{magicball: 0},
	{candy2: 0},
	{Текст: 0},
	{halloweenspookyelementbackgroundfreevector: 0},
	{flathalloweenbackgroundillustration_: 0},
	{istockphoto1559924790612x: 0},
	{GameOver: 0},
	{GameOver2: 0},
	{GameOver3: 0},
	{GameOver4: 0},
	{GameOver5: 0},
	{Аудіо: 0},
	{ghost2: 0},
	{ghost3: 0},
	{ghost4: 0},
	{ghost5: 0},
	{ghost6: 0},
	{halloweencandle: 0},
	{bat: 0},
	{bat2: 0},
	{pumpkin: 0},
	{reload: 0},
	{score: 0},
	{timer: 0},
	{bestScore: 0}
];

self.InstanceType = {
	приціл_: class extends self.ISpriteInstance {},
	Миша: class extends self.IInstance {},
	hauntedhousehalloweenbackgroundfreevector: class extends self.ISpriteInstance {},
	lollipop: class extends self.ISpriteInstance {},
	sweet: class extends self.ISpriteInstance {},
	candy: class extends self.ISpriteInstance {},
	toffee: class extends self.ISpriteInstance {},
	candybag: class extends self.ISpriteInstance {},
	ghost: class extends self.ISpriteInstance {},
	ScoreТекст: class extends self.ITextInstance {},
	halloween: class extends self.ISpriteInstance {},
	TimerТекст: class extends self.ITextInstance {},
	F_294648898_SKZQkDVBXhfIgxuuTTcEwJBTBCVmbwXu: class extends self.ISpriteInstance {},
	magicball: class extends self.ISpriteInstance {},
	candy2: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	halloweenspookyelementbackgroundfreevector: class extends self.ISpriteInstance {},
	flathalloweenbackgroundillustration_: class extends self.ISpriteInstance {},
	istockphoto1559924790612x: class extends self.ISpriteInstance {},
	GameOver: class extends self.ITextInstance {},
	GameOver2: class extends self.ITextInstance {},
	GameOver3: class extends self.ITextInstance {},
	GameOver4: class extends self.ITextInstance {},
	GameOver5: class extends self.ITextInstance {},
	Аудіо: class extends self.IInstance {},
	ghost2: class extends self.ISpriteInstance {},
	ghost3: class extends self.ISpriteInstance {},
	ghost4: class extends self.ISpriteInstance {},
	ghost5: class extends self.ISpriteInstance {},
	ghost6: class extends self.ISpriteInstance {},
	halloweencandle: class extends self.ISpriteInstance {},
	bat: class extends self.ISpriteInstance {},
	bat2: class extends self.ISpriteInstance {},
	pumpkin: class extends self.ISpriteInstance {},
	reload: class extends self.ISpriteInstance {}
}