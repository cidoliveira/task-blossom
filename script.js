const image = document.querySelector(".image");
const addButton = document.querySelector(".add-button");
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

addButton.addEventListener("click", function (event) {
  event.preventDefault();
  let newLi = document.createElement("li");
  newLi.innerHTML = inputTextBox.value;
  newLi.classList.add("task-item");
  taskList.appendChild(newLi);
  console.log(inputTextBox.value);
});
