module('SpectreView.Jdx.Reader');

module('SpectreView.Jdx.Decompressor');

test('split', function () {
	var jdxDecompressor = new SpectreView.Jdx.Decompressor();

	var line = '599.860@VKT%TLkj%J%KLJ%njKjL%kL%jJULJ%kLK1%lLMNPNPRLJ0QTOJ1P';
	var expected = ['599.860','@','V','K','T','%','T','L','k','j','%','J','%','K','L','J','%','n','j','K','j','L','%','k','L','%','j','J','U','L','J','%','k','L','K','1','%','l','L','M','N','P','N','P','R','L','J','0','Q','T','O','J','1','P'];
	
	var tokens = jdxDecompressor.split(line);
	
	deepEqual(tokens, expected);
});

test('process', function () {
	var jdxDecompressor = new SpectreView.Jdx.Decompressor();

	var tokens = ['599.860','@','V','K','T','%','T','L','k','j','%','J','%','K','L','J','%','n','j','K','j','L','%','k','L','%','j','J','U','L','J','%','k','L','K','1','%','l','L','M','N','P','N','P','R','L','J','0','Q','T','O','J','1','P'];
	var expected = ['599.860',0,0,0,0,2,4,4,4,7,5,4,4,5,5,7,10,11,11,6,5,7,6,9,9,7,10,10,9,10,11,12,15,16,16,14,17,38,38,35,38,42,47,54,59,66,75,78,88,96,104,110,121,128];
	
	var values = jdxDecompressor.process(tokens);
	
	deepEqual(values, expected);
});

test('compute', function () {
	var jdxDecompressor = new SpectreView.Jdx.Decompressor(1.0, 0.001, 1);

	var tokens = ['599.860',0,0,0,0,2,4,4,4,7,5,4,4,5,5,7,10,11,11,6,5,7,6,9,9,7,10,10,9,10,11,12,15,16,16,14,17,38,38,35,38,42,47,54,59,66,75,78,88,96,104,110,121,128];
	var expected = [[599.86,0],[600.86,0],[601.86,0],[602.86,0],[603.86,0.002],[604.86,0.004],[605.86,0.004],[606.86,0.004],[607.86,0.007],[608.86,0.005],[609.86,0.004],[610.86,0.004],[611.86,0.005],[612.86,0.005],[613.86,0.007],[614.86,0.01],[615.86,0.011],[616.86,0.011],[617.86,0.006],[618.86,0.005],[619.86,0.007],[620.86,0.006],[621.86,0.009000000000000001],[622.86,0.009000000000000001],[623.86,0.007],[624.86,0.01],[625.86,0.01],[626.86,0.009000000000000001],[627.86,0.01],[628.86,0.011],[629.86,0.012],[630.86,0.015],[631.86,0.016],[632.86,0.016],[633.86,0.014],[634.86,0.017],[635.86,0.038],[636.86,0.038],[637.86,0.035],[638.86,0.038],[639.86,0.042],[640.86,0.047],[641.86,0.054],[642.86,0.059000000000000004],[643.86,0.066],[644.86,0.075],[645.86,0.078],[646.86,0.088],[647.86,0.096],[648.86,0.10400000000000001],[649.86,0.11],[650.86,0.121],[651.86,0.128]];
	
	var points = jdxDecompressor.compute(tokens);
	
	deepEqual(points, expected);
});