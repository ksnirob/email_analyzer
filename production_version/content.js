chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  
    // Check empty link
    if (request.action === 'checkEmptyLinks') {
      const allLinks = document.querySelectorAll('a');
  
      let emptyLinksDetected = false;

      allLinks.forEach(link => {
        if (link.getAttribute('href') === '') {
          // console.warn('Empty link found:', link);
          link.style.border = '2px solid #D2333D';
          link.style.padding = '2px';
          emptyLinksDetected = true;
        }
      });
  
      if (!emptyLinksDetected) {
        alert('No empty links found.');
      }
  }
  
    // Check target="_blank"
    if (request.action === 'checkTargetBlank') {
      const allLinks = document.querySelectorAll('a');
  
      let allLinksHaveTargetBlank = true;
  
      allLinks.forEach(link => {
        if (!link.getAttribute('target') || link.getAttribute('target') !== '_blank') {
          // console.warn('Link without target="_blank" found:', link);
          link.style.border = '2px solid #E17F3F';
          link.style.padding = '2px';
          allLinksHaveTargetBlank = false;
        }
      });
  
      if (allLinksHaveTargetBlank) {
        alert('Everything is okay. All links have target="_blank".');
      }
    }
  
    // Check role="presentation"
    if (request.action === 'checkRolePresentation') {
        const allTable = document.querySelectorAll('table');

        let alltableHaveRolePresentation = true;

        allTable.forEach(table => {
          if (!table.getAttribute('role') || table.getAttribute('role') !== 'presentation') {
            // console.warn('Table without role="presentation" found:', table);
            table.style.border = '2px solid #349E5F';
            alltableHaveRolePresentation = false;
          }
        });

        if (alltableHaveRolePresentation) {
          alert('Everything is okay. All Table have role="presentation".');
        }
    }
  // Show hidden banner
  if (request.action === "executeCode") {

    var htmlContent = document.documentElement.innerHTML;

    var uncommentedCode = htmlContent.replace(/<!--(?!<!\[endif\]-->)\s*([\s\S]*?)\s*-->/g, function(match, group1) {
        var uncommentedCodeFix = group1.replace(/<style>[\s\S]*?<\/style>/g, '');
        uncommentedCodeFix += '<img>';

        return uncommentedCodeFix;
    });

    try {
        document.body.innerHTML = uncommentedCode;
    } catch (error) {
        console.error("Error setting innerHTML:", error);
    }
  }
  



  // Show b tag
  if (request.action === 'checkBTag') {
      // Select all <b> and <strong> tags
      const boldTags = document.querySelectorAll('b, strong');
      
      if (boldTags.length > 0) {
        // Apply red border to each tag
        boldTags.forEach(tag => {
          tag.style.border = '1px solid red';
          // tag.style.background = 'rgba(255, 0, 0, 0.3)';
        });
      } else {
        // Alert if no bold text is found
        alert('There is no bold text on this email.');
      }  
  }


  // Show u tag
  if (request.action === 'checkUTag') {
  // Select all <u> tags
  const uTags = document.querySelectorAll('u');

    
  if (uTags.length > 0) {
    // Apply red border to each tag
    uTags.forEach(tag => {
      tag.style.border = '1px solid red';
      // tag.style.background = 'rgba(255, 0, 0, 0.3)';
    });
  } else {
    // Alert if no bold text is found
    alert('There is underline text on this email.');
  }
  }

  // Show font name and font size tag
  if (request.action === 'fontInformation') {

    const targetElements = document.querySelectorAll('a, span, b');

    if (targetElements.length > 0) {
      targetElements.forEach((element) => {
    
        // If the current element is <b> or <span> and it is inside an <a>, skip it
        if ((element.tagName === 'B' || element.tagName === 'SPAN') && element.closest('a')) {
          return; // Skip processing this element
        }
    
        // Get the computed styles of the element (or <a> if it's <a>)
        const computedStyle = window.getComputedStyle(element);
        const fontFamily = computedStyle.getPropertyValue('font-family');
        const fontSize = computedStyle.getPropertyValue('font-size');
    
        // Create a tooltip element
        const tooltip = document.createElement('div');
        tooltip.textContent = `Font Family: ${fontFamily}, Font Size: ${fontSize}`;
        tooltip.style.position = 'absolute';
        tooltip.style.background = 'rgba(0, 0, 0, 0.7)';
        tooltip.style.color = 'white';
        // tooltip.style.border = '1px solid #ccc';
        tooltip.style.padding = '4px';
        tooltip.style.fontFamily = 'Arial, sans-serif';
        tooltip.style.fontSize = '16px';
        tooltip.style.zIndex = '9999'; // Ensure it's on top
        tooltip.style.display = 'none'; // Initially hidden
    
        // Show tooltip on hover
        element.addEventListener('mouseenter', () => {
          tooltip.style.display = 'block';
        });
    
        // Hide tooltip when not hovering
        element.addEventListener('mouseleave', () => {
          tooltip.style.display = 'none';
        });
    
        // Position the tooltip near the element
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    
        // Append the tooltip to the body
        document.body.appendChild(tooltip);
      });
    } else {
      console.error('No elements found for the specified selector.');
    }
    
    }

  // Image information
  if (request.action === 'imageInformation') {
   // Get all image elements on the page
    const images = document.querySelectorAll('img');

    // Loop through each image and display its dimensions
    images.forEach((image, index) => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;

    // Create a new element to display dimensions
    const dimensionsElement = document.createElement('div');
    dimensionsElement.textContent = `${width}px × ${height}px`; // Text content with dimensions
    dimensionsElement.style.display = 'inline-block'; // Display as inline block
    dimensionsElement.style.background = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black background
    dimensionsElement.style.color = 'white'; // White text color
    dimensionsElement.style.padding = '4px 8px'; // Add padding
    dimensionsElement.style.fontSize = '14px'; // Adjust font size
    dimensionsElement.style.textAlign = 'center'; // Center the text

    // Apply a red border to the image
    image.style.border = '1px dashed red';

    // Append the dimensions element after the image
    image.insertAdjacentElement('afterend', dimensionsElement);
});
  }
  

  // Show alt text
  if (request.action === 'altText') {
    document.querySelectorAll('img').forEach(img => {
        if (img.alt) {
            const altTextDiv = document.createElement('div');
            altTextDiv.textContent = img.alt;
            altTextDiv.style.position = 'absolute';
            altTextDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            altTextDiv.style.color = 'white';
            altTextDiv.style.padding = '5px 5px';
            altTextDiv.style.borderRadius = '3px';
            altTextDiv.style.fontSize = '16px';
            altTextDiv.style.zIndex = '1000';
    
            const rect = img.getBoundingClientRect();
            altTextDiv.style.top = `${rect.top + window.scrollY}px`;
            altTextDiv.style.left = `${rect.left + window.scrollX}px`;
    
            document.body.appendChild(altTextDiv);
        }
    });
    }
  

    // Check mirrorPageURL code"
  if (request.action === 'mirrorPageURL') {

    var codeSnippet = "<%@ include view='MirrorPageUrl' %>";

    // Get the entire HTML of the page
    var pageHTML = document.documentElement.innerHTML;

    // Check if the code snippet exists in the HTML
    if (pageHTML.includes(codeSnippet)) {
        alert('MirrorPageUrl Code Found.');
    } else {
      alert('MirrorPageUrl Code not Exist.');
    }
  }
  
    // Check trackingPixel code"
  if (request.action === 'trackingPixel') {

    var codeSnippet = "https://t.myvisualiq.net";

    // Get the entire HTML of the page
    var pageHTML = document.documentElement.innerHTML;

    // Check if the code snippet exists in the HTML
    if (pageHTML.includes(codeSnippet)) {
        alert('Tracking Pixel Found');
    } else {
      alert('Tracking Pixel not Exist.');
    }
  }
});
