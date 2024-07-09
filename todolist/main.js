document.addEventListener('DOMContentLoaded', () => {
  const inputBox = document.getElementById('input-box');
  const listContainer = document.getElementById('list-container');
  const addButton = document.getElementById('add-btn');
  const prefBtn = document.getElementById('show-pref');
  const closePrefBtn = document.querySelector('.prefs');

  function addTask() {
    if (inputBox.value === "") {
      alert("Input box is empty");
    } else {
      let li = document.createElement('li');
      li.textContent = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement('span');
      span.innerHTML = '\u00d7';
      li.appendChild(span);
    }
    inputBox.value = ""; 
    saveDataToLocalStorage();
  }

  addButton.addEventListener('click', addTask);

  listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
      saveDataToLocalStorage();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDataToLocalStorage();
    }
  });

  function saveDataToLocalStorage() {
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showDataFromLocalStorage() {
    listContainer.innerHTML = localStorage.getItem("data");
  }

  showDataFromLocalStorage();

  function showPrefs() {
    const prefDiv = document.querySelector('.pref-div');
    const modeMenu = document.querySelector('.mode');
    prefDiv.style.display = 'flex';
    modeMenu.style.display = 'block';
  }

  function hidePrefs() {
    const prefDiv = document.querySelector('.pref-div');
    prefDiv.style.display = 'none';
  }

  prefBtn.addEventListener('click', showPrefs);
  closePrefBtn.addEventListener('click', hidePrefs);
});

