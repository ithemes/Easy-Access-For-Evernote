function getNoteTab(callback) {
	chrome.tabs.getAllInWindow(undefined, function(tabs) {
		for ( var i = 0, tab; tab = tabs[i]; i++) {
			if (tab.url && NOTE_URL_RE_.test(tab.url)) {
				callback(tab);
				return;
			}
		}

		callback(null);
	});
}

function openNotes() {
	getNoteTab(function(tab) {
		if (tab) {
			chrome.tabs.update(tab.id, {
				selected : true
			});
		} else {
			chrome.tabs.create( {
				url : "https://www.evernote.com/Home.action?login=true&targetUrl=%2FHome.action"
			});
		}
		window.close();
	});
}

function closeNotes() {
	window.close();
}

function getNoteFrame() {
	var default_action = localStorage.getItem('com.bit51.chrome.eefe.default_action') || NOTE_ACTION;
	
	if (default_action == 'pop') {
		var default_width = localStorage.getItem('com.bit51.chrome.eefe.default_width') || NOTE_WIDTH;
		var default_height = localStorage.getItem('com.bit51.chrome.eefe.default_height') || NOTE_HEIGHT;
		var address = 'https://www.evernote.com/Home.action?login=true&targetUrl=%2FHome.action';

		var frame = document.createElement('iframe');
		frame.setAttribute('width', default_width);
		frame.setAttribute('height', default_height);
		frame.setAttribute('frameborder', '0');
		frame.setAttribute('src', address);
		document.getElementById('content').appendChild(frame);

		var footer = document.getElementById('footer');
		footer.style.width = (default_width - 6);
	} else {
		openNotes();
	}
}
