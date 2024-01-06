// background.js

// Store the username content
let storedUsername = "";

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "sendUsername") {
    storedUsername = request.username;
    chrome.runtime.sendMessage({ action: "updatePopup", username: storedUsername });
  }
});

// Function to get the stored username
function getStoredUsername() {
  return storedUsername;
}
