document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('input-box');
  const listContainer = document.getElementById('list-container');
  const addButton = document.getElementById('add-btn');

  function addTask() {
    if (inputBox.value === "") {
      alert("Input box is empty");
    } else {
      let li = document.createElement('li');
      li.textContent = inputBox.value;
      listContainer.appendChild(li);
      inputBox.value = ""; // Clear the input box after adding the task
    }
  }

  addButton.addEventListener('click', addTask);
});

