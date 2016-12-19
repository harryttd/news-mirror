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

  $('<div/>', {title: story.title}).append(
    $('<h3/>', {class: 'article-title', text: story.title }).append(
      $('<a>', {href: story.link}).append(
        $('<span/>', {text: story.snippet})
        ).append(
        $('<h5/>', {text: story.displayLink})
      )
    )
  )
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

/* FOR TESTING


let testStory = {
  title: 'Best title ever',
  snippet: 'Look at all this cool shnippet',
  displayLink: 'www.breitbart.com',
  link: 'http://www.breitbart.com/jerusalem/2016/12/18/ban-ki-moon-disproportionate-un-criticism-israel-harming-organizations-mission/'
}

makeResult(testStory, '#conservative-results', url)

$('#all-results').removeClass('hidden');
*/

