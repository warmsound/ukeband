function Sampler(context) {
	if (!this instanceof Sampler) {
		throw new Error('Constructor called without new.')
	}
	
	// Private variables
	
	// Private methods
	// Play sound immediately
	function onDecodeSuccess (buffer) {
		var source = context.createBufferSource();
		source.buffer = buffer;
		source.connect(context.destination);
		source.start(0);
	};
	function onDecodeError () {		
	};
	
	// Privileged methods
	this.play = function (url) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(request.response, onDecodeSuccess, onDecodeError);
		}
		request.send();			
	};
};
