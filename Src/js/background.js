getManifest(function(manifest) {
	if (!localStorage.getItem("com.bit51.chrome.eefe.version")) {
		chrome.tabs.create({url: "/html/options.html"});
	}
	localStorage.setItem("com.bit51.chrome.eefe.version", manifest.version);	
});

function getManifest(callback) {
	var xhr = new XMLHttpRequest();
	xhr.onload = function() {
		callback(JSON.parse(xhr.responseText));
	};
	xhr.open('GET', '/manifest.json', true);
	xhr.send(null);
}