let taskLists = [];

function addTaskList(heading) {
  const taskList = {
    id: Date.now(),
    heading: heading,
  };

  taskLists.push(taskList);

  renderTaskList(taskLists);
  closePopup();
}

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

function deleteTaskList(id) {
  for (let i = 0; i < taskLists.length; i++) {
    if (taskLists[i].id === id) {
      taskLists.splice(i, 1);
    }
    renderTaskList(taskLists);
  }
}

function renderTaskList(taskLists) {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';

  taskLists.forEach((taskList) => {
    const node = document.createElement('div');
    node.setAttribute('class', 'card');
    node.setAttribute('data-key', taskList.id);
    node.innerHTML = `<div class="card-details"> <div class="card-title"> ${taskList.heading} <hr /> </div> <div class="card-delete"> <i class="fas fa-minus-circle fa-2x" onclick="deleteTaskList(${taskList.id})"></i> </div> <div class="card-add"> <i class="fas fa-plus-circle fa-2x"></i> </div> </div>`;
    cards.append(node);
  });
}
