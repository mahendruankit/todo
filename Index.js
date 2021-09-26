let taskLists = [];

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
    todoList: [],
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
  var message = document.getElementById('message');
  //Remove all child nodes
  cards.innerHTML = '';

  var frag = document.createDocumentFragment();

  //No items in the todo list
  if (taskLists.length === 0) {
    message.classList.remove('message--inactive');
    cards.innerHTML = '';
  } else {
    taskLists.forEach((taskList) => {
      message.classList.add('message--inactive');

      const card = document.createElement('div');
      card.setAttribute('class', 'card');
      card.setAttribute('data-key', taskList.id);

      const cardDetails = document.createElement('div');
      cardDetails.setAttribute('class', 'card-details');

      const cardTitle = document.createElement('div');
      cardTitle.setAttribute('class', 'card-title');
      cardTitle.innerHTML = taskList.heading;
      //append card title
      cardDetails.appendChild(cardTitle);

      //append todo if exists
      if (taskList.todoList.length > 0) {
        const ul = document.createElement('ul');
        ul.setAttribute('class', 'card-todo-list');

        taskList.todoList.forEach((todo) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'card-todo-item');

          const todoButton = document.createElement('BUTTON');
          todoButton.setAttribute('class', 'card-todo-button');
          todoButton.innerHTML = 'Mark done';

          li.innerHTML = todo.heading;

          li.appendChild(todoButton);
          ul.appendChild(li);
        });

        cardDetails.appendChild(ul);
      }

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

      //append card details element

      cardDetails.appendChild(cardDeleteContainer);
      cardDetails.appendChild(cardAddContainer);

      //appened card element

      card.appendChild(cardDetails);

      //append fragment

      frag.appendChild(card);

      //append cards element
      cards.appendChild(frag);
    });
  }
}

/** Todo Popup **/

function loadTodoPopup(id) {
  var popupContainer = document.getElementById('todoPopup');
  var page = document.getElementById('page');

  page.style.filter = 'blur(0.9em)';
  popupContainer.style.display = 'flex';

  const addTodoButton = document.getElementById('addTodoButton');

  addTodoButton.setAttribute('onclick', 'addTodoItem( "' + id + '" )');

  console.log(id);
}

function closeTodoPopup() {
  var popupContainer = document.getElementById('todoPopup');
  var page = document.getElementById('page');

  page.style.filter = '';
  popupContainer.style.display = 'none';
}

/** To do **/

function addTodoItem(id) {
  const todo = {
    id: 'todo' + Date.now(),
    heading: document.getElementById('todoName').value,
  };

  for (let i = 0; i < taskLists.length; i++) {
    if (taskLists[i].id == id) {
      var todoList = taskLists[i].todoList;
      todoList.push(todo);
      console.log(todoList);
    }
  }
  closeTodoPopup();
  renderTaskList(taskLists);
}
