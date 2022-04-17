const projectBucket = document.querySelector('#previousProjects');
projectBucket.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event);
  let selectedElement = event.target;
  if (selectedElement.getAttribute('data-link')) {
    console.log(selectedElement.getAttribute('data-link'));
    window.open(`${selectedElement.getAttribute('data-link')}`, '_blank');
  } else {
    console.log(selectedElement.closest('div'));
    window.open(
      `${selectedElement.closest('div').getAttribute('data-link')}`,
      '_blank'
    );
  }
});
