function restoreOptions() {
	var default_action = localStorage.getItem('com.bit51.chrome.eefe.default_action') || NOTE_ACTION;
	var default_width = localStorage.getItem('com.bit51.chrome.eefe.default_width') || NOTE_WIDTH;
	var default_height = localStorage.getItem('com.bit51.chrome.eefe.default_height') || NOTE_HEIGHT;
	
	$('input[name=default_action]').val([default_action]);
	$('input[name=default_width]').val(default_width);
	$('input[name=default_height]').val(default_height);
}

function saveOptions() {
	var default_action = $('input[name=default_action]:checked').val() || NOTE_ACTION;
	var default_width = $('input[name=default_width]').val() || NOTE_WIDTH;
	var default_height = $('input[name=default_height]').val() || NOTE_HEIGHT;
	
	localStorage.setItem('com.bit51.chrome.eefe.default_action', default_action);
	localStorage.setItem('com.bit51.chrome.eefe.default_width', default_width);
	localStorage.setItem('com.bit51.chrome.eefe.default_height', default_height);
	
	$("div#saved").fadeIn("slow");
	$("div#saved").fadeOut("slow");
}

function resetOptions() {
	localStorage.removeItem('com.bit51.chrome.eefe.default_action');
	localStorage.removeItem('com.bit51.chrome.eefe.default_width');
	localStorage.removeItem('com.bit51.chrome.eefe.default_height');

	window.close();
}
