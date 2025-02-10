const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Sprite.Acts.SetAnim
	];
};
self.C3_JsPropNameTable = [
	{Image: 0},
	{Image2: 0},
	{Touch: 0},
	{Text: 0},
	{Audio: 0},
	{clikC: 0}
];

self.InstanceType = {
	Image: class extends self.ISpriteInstance {},
	Image2: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Audio: class extends self.IInstance {}
}