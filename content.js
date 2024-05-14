// This script runs in the context of the web page and collects image URLs.
const images = document.querySelectorAll('img');
const imageUrls = Array.from(images).map(img => img.src);

// Store image URLs using chrome.storage.local to be accessed by the popup
chrome.storage.local.set({imageUrls}, function() {
  console.log('Image URLs are stored.');
});

// content script Chrome Extension API ke through background script ko message bhejta hai, jismein collected URLs shaamil hote hain. 