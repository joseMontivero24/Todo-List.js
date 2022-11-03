//info date 

const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

// container

const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => { // time
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric'});
    dateText.textContent = date.toLocaleString('es', { weekday: 'long'});
    dateMonth.textContent = date.toLocaleString('es', { month: 'short'});
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric'});
};



addBtn.addEventListener("click", (e) => { // para lista de tarea
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}

setDate();