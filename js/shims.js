try {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
}
catch (e) {
	throw new Error("Web Audio API is not supported in this browser.");
}
