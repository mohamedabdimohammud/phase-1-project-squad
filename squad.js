const newsBtn = document.querySelector('#newsBtn');
const historyBtn = document.querySelector('#historyBtn');
const storeBtn = document.querySelector('#storeBtn');
const homeBtn = document.querySelector('#homeBtn');
const main = document.querySelector('main');
      
// Define an object with URL properties
const data = {
homeUrl: "http://127.0.0.1:5500/home.html",
newsUrl: "http://127.0.0.1:5500/news.html",
historyUrl: "http://127.0.0.1:5500/history.html",
storeUrl: "http://127.0.0.1:5500/store.html"
};
      
// Add event listeners to buttons, using the URL properties from the data object
homeBtn.addEventListener('click', function() {
window.location.href = data.homeUrl;
});
      
newsBtn.addEventListener('click', function() {
window.location.href = data.newsUrl;
});
      
historyBtn.addEventListener('click', function() {
window.location.href = data.historyUrl;
});
      
storeBtn.addEventListener('click', function() {
window.location.href = data.storeUrl;
});