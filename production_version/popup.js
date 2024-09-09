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

  
  let isHidden = false;

  document.getElementById("showHiddenBanner").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          if (isHidden) {
              // Reload the page
              chrome.tabs.reload(tabs[0].id);
              // Update button text and state
              document.getElementById("showHiddenBanner").innerText = "Show\u00a0Hidden Banner";
          } else {
              chrome.tabs.sendMessage(tabs[0].id, { action: "executeCode" });
              document.getElementById("showHiddenBanner").innerText = "Reload Page";
        }
        
          isHidden = !isHidden;
      });
  });
  

  document.getElementById('checkBTag').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'checkBTag'});
    });
  });

  document.getElementById('checkUTag').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'checkUTag'});
    });
  });

  document.getElementById('fontInformation').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'fontInformation'});
    });
  });

  document.getElementById('imageInformation').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'imageInformation'});
    });
  });

  document.getElementById('altText').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'altText'});
    });
  });

  document.getElementById('mirrorPageURL').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'mirrorPageURL'});
    });
  });

  document.getElementById('trackingPixel').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'trackingPixel'});
    });
  });

});
