function checkEmail() {
    var htmlFileInput = document.getElementById('htmlFile');
    var imageFolderInput = document.getElementById('imageFolder');

    var htmlFileName = htmlFileInput.files[0].name;
    var imageData = [];
    for (var i = 0; i < imageFolderInput.files.length; i++) {
        var imageFile = imageFolderInput.files[i];
        imageData.push({
            name: imageFile.name,
            size: (imageFile.size / 1024).toFixed(2)
        });
    }

    var dataTable = document.getElementById('dataTable');
    var tbody = dataTable.querySelector('tbody');
    tbody.innerHTML = '';

    var htmlReader = new FileReader();
    htmlReader.onload = function (event) {
        var htmlContent = event.target.result;
        var parser = new DOMParser();
        var doc = parser.parseFromString(htmlContent, 'text/html');
        var htmlImages = Array.from(doc.querySelectorAll('img')).map(img => img.src);

        for (var i = 0; i < imageData.length; i++) {
            var row = tbody.insertRow(i);
            var fileTypeCell = row.insertCell(0);
            var fileNameCell = row.insertCell(1);
            var fileSizeCell = row.insertCell(2);

            fileTypeCell.textContent = i === 0 ? 'HTML' : 'Image';
            fileNameCell.textContent = i === 0 ? htmlFileName : imageData[i].name;
            fileSizeCell.textContent = i === 0 ? '-' : imageData[i].size;

            if (i !== 0 && parseFloat(imageData[i].size) > 800) {
                row.classList.add('blue-bg');
            } else {
                var isUsed = htmlImages.includes(imageData[i].name);
                if (isUsed) {
                    row.classList.add('orange-bg');
                } else {
                    row.classList.add('green-bg');
                    var isNotRendered = !htmlContent.includes(imageData[i].name);
                    if (isNotRendered) {
                        row.classList.remove('green-bg');
                        row.classList.add('red-bg');
                    }
                }
            }
        }
    };

    htmlReader.readAsText(htmlFileInput.files[0]);
}