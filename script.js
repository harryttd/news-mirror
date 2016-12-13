let headlineArray = document.getElementsByTagName('h1');
let headline = '';

// if (document.getElementById('headline')) {
//   headline = document.getElementById('headline').textContent;
// }
// else if (document.getElementsByClassName('headline')) {
//   headline = document.getElementsByClassName('headline')[0].textContent;
// }
if (headlineArray.length > 1) {
  console.log('in headlineArray')
  headlineArray = [].slice.call(headlineArray);
  console.log('length', headlineArray.length)
  headlineArray.forEach(item => {
    console.log(item)
    console.log('item prop: ', item.getAttribute('itemprop'))
    let temp = item.getAttribute('itemprop')
    if (temp === 'headline') {
      headline = item.textContent;
    }
  });
} else {
  headline = headlineArray[0].textContent;
}


console.log('HEADLINE IS: ', headline);
