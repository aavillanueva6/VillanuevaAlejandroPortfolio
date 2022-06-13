//adds function to click event within the projectBucket
// document
//   .querySelector('#previousProjects')
//   .addEventListener('click', function (event) {
//     let selectedElement = event.target;

//     // if statement ensures that there is a div element in the click's path to the root of the DOM.  If a div exists, it uses the data-link attribute to open the selected link in a new tab.
//     if (selectedElement.closest('div')) {
//       window.open(
//         `${selectedElement.closest('div').getAttribute('data-link')}`,
//         '_blank'
//       );
//     }
//   });

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
    document
      .querySelector('.customFadeIn')
      .classList.remove('invisible', 'fadeOutEffect');
    document.querySelector('.customFadeIn').classList.add('fadeInEffect');
    document.querySelector('.customFadeOut').classList.add('invisible');
    document.querySelector('.customFadeOut').classList.add('fadeOutEffect');
    document.querySelector('.customFadeOut').classList.remove('fadeInEffect');
  } else {
    document.querySelector('.customFadeIn').classList.add('invisible');
    document.querySelector('.customFadeIn').classList.add('fadeOutEffect');
    document.querySelector('.customFadeIn').classList.remove('fadeInEffect');
    document
      .querySelector('.customFadeOut')
      .classList.remove('invisible', 'fadeOutEffect');
    document.querySelector('.customFadeOut').classList.add('fadeInEffect');
  }
}
