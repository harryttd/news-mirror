

function getHeadline () {
  let headlineArray = document.getElementsByTagName('h1');
  let headline = '';

  if (document.getElementById('headline')) {
    headline = document.getElementById('headline').textContent;
  } else if (document.getElementsByClassName('headline').length) {
    headline = document.getElementsByClassName('headline')[0].textContent;
  } else if (headlineArray.length > 1) {
    headlineArray = [].slice.call(headlineArray);
    headlineArray.forEach(item => {
      let temp = item.getAttribute('itemprop');
      if (temp === 'headline') {
        headline = item.textContent;
      }
    });
  }
  return headline;
}

function getUrl () {
  let fullUrl = window.location.toString();
  let temp = fullUrl.slice(fullUrl.indexOf('.') + 1);
  return 'www.' + temp.slice(0, temp.indexOf('.')) + '.com';
}

function despecifyHeadline(headline) {
  let array = headline.split(' ');
  return array.slice(0, (array.length / 2) - 1).join(' ');
}

// const siteObject = {};
// const lib = 'liberal';
// const cons = 'conservative';
// const mod = 'moderate';
// siteObject['www.nytimes.com'] = lib;
// siteObject['www.huffingtonpost.com'] = lib;
// siteObject['www.buzzfeed.com'] = lib;
// siteObject['www.foxnews.com'] = cons;
// siteObject['www.breitbart.com'] = cons;
// siteObject['www.nbcnews.com'] = mod;
// siteObject['www.cnn.com'] = mod;
// siteObject['www.yahoo.com'] = mod;
// siteObject['www.reuters.com'] = mod;
