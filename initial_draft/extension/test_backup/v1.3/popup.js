console.log('Popup script loaded');

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkEmptyLinks').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'checkEmptyLinks'});
    });
  });

  document.getElementById('checkTargetBlank').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'checkTargetBlank'});
    });
  });

  document.getElementById('checkRolePresentation').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'checkRolePresentation'});
    });
  });
});
