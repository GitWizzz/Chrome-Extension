// Sends message to script and start autofill form
document.getElementById("autofill").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "AUTOFILL" });
  });
});
