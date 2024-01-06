// popup.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('readButton').addEventListener('click', function () {
        document.getElementById("usernameDisplay").innerText = "test du boutton";
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'readText' });
    });
  });
});

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("Message received in popup.js:", request);
  if (request.action === "updatePopup") {
    const usernameDisplay = document.getElementById('usernameDisplay');
    if (usernameDisplay) {
      //usernameDisplay.innerText = request.username;
      usernameDisplay.innerText = "test de popup";
    }
  }
});
