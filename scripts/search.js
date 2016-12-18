/* global keys chrome */

function query(event) {
  chrome.tabs.executeScript({
    file: '/scripts/script.js'
  }, headline => {

    console.log('headline is', headline, typeof headline);

    // convert headline from obj to string joined by '+'s
    let toSearch = headline[0].replace(' ', '+');

    let moderate = $.get(`https://www.googleapis.com/customsearch/v1?q=${toSearch}&cx=${keys.MODERATE_ID}&key=${keys.GOOGLE_CSE}`);
    let liberal = $.get(`https://www.googleapis.com/customsearch/v1?q=${toSearch}&cx=${keys.LIBERAL_ID}&key=${keys.GOOGLE_CSE}`);
    let conservative = $.get(`https://www.googleapis.com/customsearch/v1?q=${toSearch}&cx=${keys.CONSERVATIVE_ID}&key=${keys.GOOGLE_CSE}`);

    Promise.all([moderate, liberal, conservative])
    .then(resultsArr => console.log('WE GOT SHIT BACK', resultsArr))

    


  });
}

(function addListener() {
    var btn = document.getElementById('search');
    btn.addEventListener('click', query);
})();


