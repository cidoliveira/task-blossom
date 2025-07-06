const image = document.querySelector(".image");
const addButton = document.querySelector(".add-task-button");
const inputTextBox = document.querySelector(".input-text-box");
const taskList = document.querySelector(".task-list");

function getApi() {
  fetch("https://api.otakugifs.xyz/gif/allreactions")
    .then((response) => response.json())
    .then((data) => {
      let randomReaction =
        data.reactions[Math.floor(Math.random() * data.reactions.length)];
      fetch(`https://api.otakugifs.xyz/gif?reaction=${randomReaction}`)
        .then((response) => response.json())
        .then((data) => {
          image.src = data.url;
        });
    });
}

getApi();

function changeImage() {
  image.src = "./img/Loading_icon.gif";
  getApi();
}

image.addEventListener("click", changeImage);

let numberTasks = 0;

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let newLi = document.createElement("li");
  newLi.innerHTML = `${inputTextBox.value}<i class="trash fa-solid fa-trash"></i>`;
  newLi.classList.add("task-item");

  if (newLi.innerText != "") {
    taskList.appendChild(newLi);
    numberTasks++;
    console.log(numberTasks);
  }

  let trash = newLi.querySelector(".trash");
  trash.addEventListener("click", function () {
    newLi.remove();
    numberTasks--;
    console.log(numberTasks);
    addButton.removeAttribute("disabled");
  });

  if (numberTasks >= 6) {
    addButton.setAttribute("disabled", true);
  } else {
    addButton.removeAttribute("disabled");
  }
});
