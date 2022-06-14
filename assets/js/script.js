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
  const fadeIn = document.querySelectorAll('.customFadeIn');
  const fadeOut = document.querySelectorAll('.customFadeOut');

  if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
    for (el of fadeIn) {
      el.classList.remove('invisible', 'fadeOutEffect');
      el.classList.add('fadeInEffect');
    }
    for (el of fadeOut) {
      el.classList.add('invisible');
      el.classList.add('fadeOutEffect');
      el.classList.remove('fadeInEffect');
    }
  } else {
    for (el of fadeIn) {
      el.classList.add('invisible');
      el.classList.add('fadeOutEffect');
      el.classList.remove('fadeInEffect');
    }
    for (el of fadeOut) {
      el.classList.remove('invisible', 'fadeOutEffect');
      el.classList.add('fadeInEffect');
    }
  }
}
