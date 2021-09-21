var addEntry = document.getElementById('addEntry');
var invisRow = document.getElementById('invisible-row');
var saveButton = document.getElementById('save');

addEntry.addEventListener('click', function (event) {
  invisRow.style.visibility = 'visible';
});

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  invisRow.style.visibility = 'hidden';
})
;
