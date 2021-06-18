chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		console.log(window.location.hash);

		// Automate only if url has #automate
		if (window.location.hash === '#automate') {
			console.log('Automating!');
			// Click on first photo
			document.querySelectorAll('.v1Nh3 > a')[0].click()
		}
		
        // const elem = document.querySelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b');

        // elem.value = 'My Search';

	}
	}, 10);
});