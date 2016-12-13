
  function populateSearch(event) {
    chrome.tabs.executeScript({
      file: '/script.js'
    }, result => {
      var bars = document.getElementsByClassName('gsc-input');
      console.log('bars are', bars)
      // want bars[1]
      document.getElementById("gsc-i-id1").value = result[0];

      // simulate clicking Google search
      var btn = document.getElementsByClassName('gsc-search-button');
      btn[1].click();
    })
  }







// // MODERATE
(function() {
    var cx = '007780150377665373782:-n2prkuxpze';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    var btn = document.getElementById('populateSearch');
    btn.addEventListener('click', populateSearch);
  })();



// // LIBERAL
// (function() {
//     var cx = '007780150377665373782:3zdep6z7yg8';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);

//     var btn = document.getElementById('populateSearch');
//     btn.addEventListener('click', populateSearch);
//   })();

// // CONSERVATIVE
// (function() {
//     var cx = '007780150377665373782:1iwvtunrrw0';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);

//     var btn = document.getElementById('populateSearch');
//     btn.addEventListener('click', populateSearch);
//   })();




// OLD ONE
  // (function() {
  //   var cx = '007968424207281162508:l7pac8clyg0';
  //   var gcse = document.createElement('script');
  //   gcse.type = 'text/javascript';
  //   gcse.async = true;
  //   gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  //   var s = document.getElementsByTagName('script')[0];
  //   s.parentNode.insertBefore(gcse, s);

    // var btn = document.getElementById('populateSearch');
    // btn.addEventListener('click', populateSearch);
  // })();


