document.addEventListener('DOMContentLoaded', function() {
  const imagesList = document.getElementById('imagesList');

  // Retrieve image URLs from storage
  chrome.storage.local.get('imageUrls', function(data) {
  
    data.imageUrls.forEach(url => {
      let imageContainer = document.createElement('div'); // Create image container for each image
      imageContainer.classList.add('imageContainer'); // Add class for styling
      
      let img = document.createElement('img');
      img.src = url;
      imageContainer.appendChild(img);

      let downloadIcon = document.createElement('img');
      downloadIcon.classList.add('downloadIcon');
      downloadIcon.src = 'download-icon.png'; // Replace 'download-icon.png' with your icon file path

      downloadIcon.addEventListener('click', function() {
        // jab koi user download button par click krega to chrome.downloads.download() ek function trigger hoga jo ki local storage se aa rhi image url ko retrive krke user ke local system me download kar dega

        //chrome.downloads.download() function ek part hai Chrome Extension API ka, jo Chrome browser ke ek feature ko enable karta hai jisse users images, files, ya anya resources ko download kar sakein. 

        // Reference : https://developer.chrome.com/docs/extensions/reference/api/downloads
        
        
        chrome.downloads.download({ url: url });


      });

      imageContainer.appendChild(downloadIcon);

      imagesList.appendChild(imageContainer);
    });
  });
});
