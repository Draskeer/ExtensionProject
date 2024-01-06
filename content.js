// content.js

// Function to get the content of the field with id "username-200"
function getUsernameContent() {
  const usernameField = document.getElementById("username-200");
  if (usernameField) {
    return usernameField.value || usernameField.innerText || "";
  }
  return "";
}

// Listen for messages from the extension
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'readText') {
   // const usernameContent = getUsernameContent();
    const usernameContent = "got it";
    
    // Send the username content back to the background script
    chrome.runtime.sendMessage({ action: 'sendUsername', username: usernameContent });
  }
});
