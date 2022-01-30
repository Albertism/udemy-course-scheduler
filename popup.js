let bgp = chrome.extension.getBackgroundPage();

document.addEventListener('DOMContentLoaded', function() {
    let loadBtn = document.getElementById('load-btn');
    loadBtn.addEventListener('click', function() {
        alert('button has clicked');
    });
});
