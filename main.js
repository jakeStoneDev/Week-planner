
/* Data */
var data = {
  events: [],
  editing: null,
  nextEntryId: 1,
  view: ''
};

var savedData;
var savedDataJSON = localStorage.getItem('javascript-local-storage');
/* getting previous entry ID and incrementing */
if (savedDataJSON !== null) {
  savedData = JSON.parse(savedDataJSON);
  data.events = savedData.entries;
  data.view = savedData.view;
  data.nextEntryId = savedData.nextEntryId;
}

/* main */
function showEventForm() {
  data.view = 'event-form';
  eventForm.style.visibility = 'visible';

  var saveInputJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', saveInputJSON);
}

function showMain() {
  data.view = 'add-event';
  eventForm.style.visibility = 'hidden';

  var saveInputJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', saveInputJSON);
}

document.addEventListener('DOMContentLoaded', function () {
  if (data.view === 'event-form') {
    showEventForm();
  } else {
    showMain();
  }
});

var addEvent = document.getElementById('addEntry');
var eventForm = document.getElementById('invisible-row');

addEvent.addEventListener('click', function (event) {
  showEventForm();
});

var exitForm = document.getElementById('exit');
exitForm.addEventListener('click', function (event) {
  showMain();
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
  showMain();
}

form.addEventListener('submit', handleSubmit);

function addEvent(event) {
  var dayEventTitle = document.createElement('h2');
  dayEventTitle.textContent = 'Scheduled Events for ' + form.day.value;

  var dayEventTable = document.createElement('table');

}
