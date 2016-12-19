/* global keys chrome */

(function addListener() {
    var btn = document.getElementById('search');
    btn.addEventListener('click', query);
})();

// links open in new tab
$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});


function makeResult(story, section) {

  $(`<div title=${story.title}>\
      <h3 class="article-title">${story.title}</h3>\
       <a href=${story.link}>\
         <span>${story.snippet}</span>\
         <h5>${story.displayLink}</h5>\
       </a>\
     </div>`)
  .appendTo(section);
}


function makeResultSection(arr, section, url) {

  // filter out any from same domain
  let filtered = arr.filter(story => {
    return !story.link.match(url);
  });

  // limit to 3 articles per section
  let min = Math.min(filtered.length, 3);

  // create elements and append to DOM
  filtered.slice(0, min).forEach(story => {
    makeResult(story, section);
  });
}


function query(event) {
  chrome.tabs.executeScript({
    file: '/scripts/script.js'
  }, vals => {

    let url = vals[0].url;
    let headline = vals[0].headline;

    let toSearch = headline.replace(' ', '+');

    let moderate = $.get(`https://www.googleapis.com/customsearch/v1?q=${toSearch}&cx=${keys.MODERATE_ID}&key=${keys.GOOGLE_CSE}`);
    let liberal = $.get(`https://www.googleapis.com/customsearch/v1?q=${toSearch}&cx=${keys.LIBERAL_ID}&key=${keys.GOOGLE_CSE}`);
    let conservative = $.get(`https://www.googleapis.com/customsearch/v1?q=${toSearch}&cx=${keys.CONSERVATIVE_ID}&key=${keys.GOOGLE_CSE}`);

    Promise.all([moderate, liberal, conservative])
    .then(resultsArr => {
      console.log('WE GOT SHIT BACK', resultsArr);

      makeResultSection(resultsArr[0].items, '#moderate-results', url);
      makeResultSection(resultsArr[1].items, '#liberal-results', url);
      makeResultSection(resultsArr[2].items, '#conservative-results', url);

      $('#all-results').removeClass('hidden');

    })
    .catch(console.error);
  });
}


