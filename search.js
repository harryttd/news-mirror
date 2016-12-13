  //
  // (function() {
  //   console.log("HELLO");
  //   var cx = '007968424207281162508:l7pac8clyg0';
  //   var gcse = document.createElement('script');
  //   gcse.type = 'text/javascript';
  //   gcse.async = true;
  //   gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  //   var s = document.getElementsByTagName('script')[0];
  //   s.parentNode.insertBefore(gcse, s);
  // })();

  function populateSearch(event) {
    chrome.tabs.executeScript({
      file: '/script.js'
    }, (result) => {
      console.log('RESULT', result);
      document.getElementById("gsc-i-id1").value = result[0];
    });

  }

  (function() {
    var cx = '007968424207281162508:l7pac8clyg0';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    var btn = document.getElementById('populateSearch');
    btn.addEventListener('click', populateSearch);
  })();
