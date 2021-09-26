let taskLists = [];
let todoLists = [];

/** TaskList Popup **/

function loadPopup() {
  var popupContainer = document.getElementById('popup');
  var page = document.getElementById('page');

  page.style.filter = 'blur(0.9em)';
  popupContainer.style.display = 'flex';
}

function closePopup() {
  var popupContainer = document.getElementById('popup');
  var page = document.getElementById('page');
  var listName = document.getElementById('listName');

  page.style.filter = '';
  popupContainer.style.display = 'none';
  listName.value = '';
}

/** TaskList **/

function addTaskList(heading) {
  const taskList = {
    id: 'tasklist' + Date.now(),
    heading: heading,
  };

  taskLists.push(taskList);

  renderTaskList(taskLists);
  closePopup();
}

function deleteTaskList(id) {
  for (let i = 0; i < taskLists.length; i++) {
    if (taskLists[i].id == id) {
      console.log('do you even slice bro?');
      taskLists.splice(i, 1);
    }
    renderTaskList(taskLists);
  }
  console.log(taskLists.length);
}

function renderTaskList(taskLists) {
  var cards = document.getElementById('cards');
  
  //Remove all child nodes
  cards.innerHTML = '';

  var frag = document.createDocumentFragment();

  if (taskLists.length === 0) {
    cards.remove();
  }

  taskLists.forEach((taskList) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card');
    card.setAttribute('data-key', taskList.id);

    const cardDetails = document.createElement('div');
    cardDetails.setAttribute('class', 'card-details');

    const cardTitle = document.createElement('div');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerHTML = taskList.heading;

    const cardDeleteIcon = document.createElement('i');
    cardDeleteIcon.setAttribute('class', 'fas fa-minus-circle fa-2x');

    const cardDeleteContainer = document.createElement('div');
    cardDeleteContainer.setAttribute('class', 'card-delete');
    cardDeleteContainer.setAttribute(
      'onclick',
      'deleteTaskList( "' + taskList.id + '" )'
    );

    cardDeleteContainer.appendChild(cardDeleteIcon);

    cardDetails.appendChild(cardTitle);
    cardDetails.appendChild(cardDeleteContainer);

    card.appendChild(cardDetails);

    frag.appendChild(card);
    cards.appendChild(frag);
  });
}

/** Todo Popup **/

function loadTodoPopup() {
  var popupContainer = document.getElementById('todoPopup');
  var page = document.getElementById('page');

  page.style.filter = 'blur(0.9em)';
  popupContainer.style.display = 'flex';

  document
    .getElementById('addTodoButton')
    .addEventListener('click', function () {
      console.log('hi');
    });
}

function closeTodoPopup() {
  var popupContainer = document.getElementById('todoPopup');
  var page = document.getElementById('page');
  var listName = document.getElementById('listName');

  page.style.filter = '';
  popupContainer.style.display = 'none';
  listName.value = '';
}

/** To do **/
