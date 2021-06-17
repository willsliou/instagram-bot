chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// // ----------------------------------------------------------
		// // This part of the script triggers when page is done loading
		// console.log("ALOOOHAAA,This message was sent from scripts/inject.js... SO STRONG!");
		// // ----------------------------------------------------------

        const elem = document.querySelector('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')

        elem.value = 'My Search';

	}
	}, 10);
});