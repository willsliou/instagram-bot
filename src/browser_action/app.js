document.getElementById('automate-form').onsubmit = event => {
    event.preventDefault();
    chrome.tabs.create( { url: 'https://www.google.com' });
}