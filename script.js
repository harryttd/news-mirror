var headline;
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
  // console.log("headline",headline);
  return headline;
}

function getUrl () {
  let fullUrl = window.location.toString();
  let temp = fullUrl.slice(fullUrl.indexOf('.') + 1);
  return 'www.' + temp.slice(0, temp.indexOf('.')) + '.com';
}

var x = getHeadline();
console.log("X IS...", x);
// console.log(getHeadline());
// console.log(getUrl())
headline = getHeadline();
headline;
