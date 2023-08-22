window.addEventListener("DOMContentLoaded", () => {
  const prevValue = localStorage.getItem("prevSetName");
  if (prevValue) {
    formNameInput.value = prevValue;
  }
});

const saveBtn = document.querySelector(".save-btn");
const deleteBtn = document.querySelector(".delete-btn");
const formNameInput = document.getElementById("form-name");

saveBtn.addEventListener("click", saveName);
deleteBtn.addEventListener("click", deleteName);

function saveName() {
  const formValue = formNameInput.value;
  localStorage.setItem("prevSetName", formValue);
}
function deleteName() {
  localStorage.removeItem("prevSetName");
}

let counterValue = parseInt(sessionStorage.getItem("counter")) || 0;
const counter = document.getElementById("counter");

window.onload = () => {
  setInterval(() => {
    counter.innerHTML = counterValue;
    counterValue++;
    sessionStorage.setItem("counter", counterValue);
  }, 1000);
};
