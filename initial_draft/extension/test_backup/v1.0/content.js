chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'checkEmptyLinks') {
      // Select all 'a' tags on the page
      const allLinks = document.querySelectorAll('a');
  
      let emptyLinksDetected = false;
  
      // Iterate through each link
      allLinks.forEach(link => {
        // Check if href attribute is empty
        if (link.getAttribute('href') === '') {
          // Log the empty link to the console
          console.warn('Empty link found:', link);
          // You can also add additional styling or borders here
          link.style.border = '2px solid red';
          emptyLinksDetected = true;
        }
      });
  
      // Display warning alert in the browser if no empty links are detected
      if (!emptyLinksDetected) {
        alert('No empty links found.');
      }
    }
  
    if (request.action === 'checkTargetBlank') {
      // Select all 'a' tags on the page
      const allLinks = document.querySelectorAll('a');
  
      let allLinksHaveTargetBlank = true;
  
      // Iterate through each link
      allLinks.forEach(link => {
        // Check if target="_blank" attribute is not present
        if (!link.getAttribute('target') || link.getAttribute('target') !== '_blank') {
          // Log the link without target="_blank" to the console
          console.warn('Link without target="_blank" found:', link);
          // Add orange border to highlight
          link.style.border = '2px solid orange';
          allLinksHaveTargetBlank = false;
        }
      });
  
      // Display alert if all links have target="_blank"
      if (allLinksHaveTargetBlank) {
        alert('Everything is okay. All links have target="_blank".');
      }
    }
  });
  