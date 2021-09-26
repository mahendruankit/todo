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
      taskLists.splice(i, 1);
    }
    renderTaskList(taskLists);
  }
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

    const cardAddIcon = document.createElement('i');
    cardAddIcon.setAttribute('class', 'fas fa-plus-circle fa-2x');

    const cardAddContainer = document.createElement('div');
    cardAddContainer.setAttribute('class', 'card-add');
    cardAddContainer.setAttribute(
      'onclick',
      'loadTodoPopup( "' + taskList.id + '" )'
    );

    cardAddContainer.appendChild(cardAddIcon);

    //Append Card Details Element

    cardDetails.appendChild(cardTitle);
    cardDetails.appendChild(cardDeleteContainer);
    cardDetails.appendChild(cardAddContainer);

    //Append Card Element

    card.appendChild(cardDetails);

    //Append Fragment

    frag.appendChild(card);

    //Append Cards Element
    cards.appendChild(frag);
  });
}

/** Todo Popup **/

function loadTodoPopup(id) {
  var popupContainer = document.getElementById('todoPopup');
  var page = document.getElementById('page');

  page.style.filter = 'blur(0.9em)';
  popupContainer.style.display = 'flex';

  document
    .getElementById('addTodoButton')
    .addEventListener('click', function () {
      addTodoItem(id);
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

function addTodoItem(id) {
  console.log('add to do item function' + id);
}
