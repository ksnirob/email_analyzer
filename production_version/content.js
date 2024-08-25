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

  // Select all <b> tags
  const boldTags = document.querySelectorAll('b');

  // Apply red border to each tag
  boldTags.forEach(tag => {
      tag.style.border = '1px solid red';
  });

  // Show u tag

  // Select all <u> tags
  const uTags = document.querySelectorAll('u');

  // Apply red border to each tag
  uTags.forEach(tag => {
      tag.style.border = '1px solid red';
  });


  // Show font name and font size tag

  // Replace 'your-selector' with the CSS selector for the elements you want to inspect
const targetElements = document.querySelectorAll('your-selector');

if (targetElements.length > 0) {
  targetElements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element);
    const fontFamily = computedStyle.getPropertyValue('font-family');
    const fontSize = computedStyle.getPropertyValue('font-size');

    // Create a tooltip element
    const tooltip = document.createElement('div');
    tooltip.textContent = `Font Family: ${fontFamily}, Font Size: ${fontSize}`;
    tooltip.style.position = 'absolute';
    tooltip.style.background = 'white';
    tooltip.style.border = '1px solid #ccc';
    tooltip.style.padding = '4px';
    tooltip.style.fontFamily = 'Arial, sans-serif';
    tooltip.style.fontSize = '12px';
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

// Show image information

// Get all image elements on the page
const images = document.querySelectorAll('img');

// Loop through each image and display its dimensions and file size
images.forEach((image, index) => {
    const width = image.naturalWidth;
    const height = image.naturalHeight;
    const fileSizeKB = Math.round(image.src.length / 1024); // Calculate file size in KB

    // Create a new element to display information
    const infoElement = document.createElement('div');
    infoElement.textContent = `Image ${index + 1}: height ${height}px, width ${width}px, size ${fileSizeKB}KB`;
    infoElement.style.border = '1px solid red'; // Add a red border for visibility

    // Append the info element after the image
    image.insertAdjacentElement('afterend', infoElement);
});


});
  