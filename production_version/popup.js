console.log('Popup script loaded');

document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("checkEmptyLinks").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("checkEmptyLinks").innerText = "Check Empty Links";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "checkEmptyLinks" });
            document.getElementById("checkEmptyLinks").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });

  document.getElementById("checkTargetBlank").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("checkTargetBlank").innerText = 'Check target="_blank"';
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "checkTargetBlank" });
            document.getElementById("checkTargetBlank").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });
  
  document.getElementById("checkRolePresentation").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("checkRolePresentation").innerText = 'Check role="presentation"';
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "checkRolePresentation" });
            document.getElementById("checkRolePresentation").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
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

  document.getElementById("checkBTag").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("checkBTag").innerText = "Check Bold Text";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "checkBTag" });
            document.getElementById("checkBTag").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });

  document.getElementById("checkUTag").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("checkUTag").innerText = "Check Underline Text";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "checkUTag" });
            document.getElementById("checkUTag").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });

  document.getElementById("fontInformation").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("fontInformation").innerText = "Font & Font Size";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "fontInformation" });
            document.getElementById("fontInformation").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });

  document.getElementById("imageInformation").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("imageInformation").innerText = "Image Information";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "imageInformation" });
            document.getElementById("imageInformation").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });


  document.getElementById("altText").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("altText").innerText = "Alt Text";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "altText" });
            document.getElementById("altText").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });


  document.getElementById("mirrorPageURL").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("mirrorPageURL").innerText = "MirrorPageURL Code";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "mirrorPageURL" });
            document.getElementById("mirrorPageURL").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });


  document.getElementById("trackingPixel").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (isHidden) {
            // Reload the page
            chrome.tabs.reload(tabs[0].id);
            // Update button text and state
            document.getElementById("trackingPixel").innerText = "Tracking Pixel";
        } else {
            chrome.tabs.sendMessage(tabs[0].id, { action: "trackingPixel" });
            document.getElementById("trackingPixel").innerText = "Reload Page";
      }
      
        isHidden = !isHidden;
    });
  });

});
