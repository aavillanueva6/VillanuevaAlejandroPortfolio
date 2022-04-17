// adds a global variable for the projectBucket to handle click events
const projectBucket = document.querySelector('#previousProjects');

//adds function to click event within the projectBucket
projectBucket.addEventListener('click', function (event) {
  let selectedElement = event.target;

  // if statement ensures that there is a div element in the click's path to the root of the DOM.  If a div exists, it uses the data-link attribute to open the selected link in a new tab.
  if (selectedElement.closest('div')) {
    window.open(
      `${selectedElement.closest('div').getAttribute('data-link')}`,
      '_blank'
    );
  }
});
