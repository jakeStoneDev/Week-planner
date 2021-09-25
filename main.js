/* Data */
var data = {
  events: [],
  editing: null,
  nextEntryId: 1
};

var savedData;
var savedDataJSON = localStorage.getItem('javascript-local-storage');
/* getting previous entry ID and incrementing */
if (savedDataJSON !== null) {
  savedData = JSON.parse(savedDataJSON);
  data.nextEntryId = savedData.nextEntryId;
}

/* main */
var addEvent = document.getElementById('addEntry');
var eventForm = document.getElementById('invisible-row');

addEvent.addEventListener('click', function (event) {
  eventForm.style.visibility = 'visible';
});

var form = document.getElementById('formId');
function handleSubmit(event) {
  event.preventDefault();
  var newEvent = {
    day: '',
    time: '',
    description: '',
    eventId: ''
  };

  newEvent.day = form.day.value;
  newEvent.time = form.time.value;
  newEvent.description = form.textarea.value;

  if (data.events.length === 0) {
    data.nextEntryId = 1;
  }
  newEvent.eventId = data.nextEntryId;
  data.nextEntryId++;

  data.events.unshift(newEvent);

  var saveInputJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', saveInputJSON);

  eventForm.style.visibility = 'hidden';
  form.reset();
}

form.addEventListener('submit', handleSubmit);
