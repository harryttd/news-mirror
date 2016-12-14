function addQuery(iframeId, headline) {
  var inner = document.getElementById(iframeId).contentDocument;
  inner.getElementById('gsc-i-id1').value = headline;
}


function simulateClick(iframeId) {
  var inner = document.getElementById(iframeId).contentDocument;
  var btn = inner.getElementsByClassName('gsc-search-button');
  btn[1].click();
}

function populateSearch(event) {
  chrome.tabs.executeScript({
    file: '/scripts/script.js'
  }, headline => {

    // insert headling into query of google searches
    addQuery('lib-iframe', headline);
    addQuery('con-iframe', headline);
    addQuery('mod-iframe', headline);


    // simulate clicking Google search
    simulateClick('lib-iframe');
    simulateClick('con-iframe');
    simulateClick('mod-iframe');


  });
}

(function addListeners() {
    var btn = document.getElementById('populateSearch');
    btn.addEventListener('click', populateSearch);
})();



// Docs say we should fill our queries this way
// but it doesn't work...womp womp...

// var element = google.search.cse.element.getElement("2DSearch");
//         element.prefillQuery(primarySearch);
//         element.execute(primarySearch);