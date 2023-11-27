const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

function createNewButton(text) {
  const newButton = document.createElement("button");
  newButton.classList.add("new-btn");
  newButton.textContent = text;
  return newButton;
}

yesBtn.addEventListener("click", () => {
  yesBtn.remove(); // Remove the existing "Yes" button
  noBtn.remove();  // Remove the existing "No" button
  question.innerHTML = "Select a movie to watch";

  // Create and append new buttons
  const newButton1 = createNewButton("The Wind Rises");
  const newButton2 = createNewButton("Whisper of the Heart");

  btnGroup.appendChild(newButton1);
  btnGroup.appendChild(newButton2);

  // Add event listeners to new buttons
  newButton1.addEventListener("click", () => {
    console.log("New Button 1 clicked!");
    question.innerHTML = "Yay, Let's watch movie at 3:30 PM Today!"
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    newButton1.remove();
    newButton2.remove();
  });

  newButton2.addEventListener("click", () => {
    console.log("New Button 2 clicked!");
    question.innerHTML = "Yay, Let's watch movie at 3:30 PM Today!"
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
    newButton1.remove();
    newButton2.remove();
  });
});


noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});