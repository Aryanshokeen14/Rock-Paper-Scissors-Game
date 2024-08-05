let wincount = 0;
let lostcount = 0;
let count = 0;
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let rock = document.querySelector(".img1");
let paper = document.querySelector(".img2");
let scissors = document.querySelector(".img3");
let message = document.querySelector(".pick");

box1.innerHTML = count;
box1.style.fontSize = "70px";
box2.innerHTML = count;
box2.style.fontSize = "70px";

let randomNumber = Math.floor(Math.random() * 3) + 1;
console.log(randomNumber);

rock.onclick = () => {
  rock.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
  });
  if (randomNumber == 1) {
    message.innerHTML = "It was a draw";
    message.style.fontSize = "30px";
    message.style.backgroundColor = "gray";
  } else if (randomNumber == 2) {
    message.innerHTML = "You Lost to Paper";
    box2.innerHTML = lostcount += 1;
    message.style.fontSize = "30px";
    message.style.backgroundColor = "red";
  } else {
    message.innerHTML = "You Won from Scissor";
    box1.innerHTML = wincount += 1;
    message.style.fontSize = "30px";
    message.style.backgroundColor = "green";
  }
};
paper.onclick = () => {
  paper.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
  });
  if (randomNumber == 2) {
    message.innerHTML = "It was a draw";
    message.style.fontSize = "30px";
    message.style.backgroundColor = "gray";
  } else if (randomNumber == 3) {
    message.innerHTML = "You Lost to Scissor";
    box2.innerHTML = lostcount += 1;
    message.style.fontSize = "30px";
    message.style.backgroundColor = "red";
  } else {
    message.innerHTML = "You Won from Rock";
    box1.innerHTML = wincount += 1;
    message.style.fontSize = "30px";
    message.style.backgroundColor = "green";
  }
};
scissors.onclick = () => {
  scissors.addEventListener("click", () => {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
  });
  if (randomNumber == 3) {
    message.innerHTML = "It was a draw";
    message.style.fontSize = "30px";
    message.style.backgroundColor = "gray";
  } else if (randomNumber == 1) {
    message.innerHTML = "You Lost to Rock";
    box2.innerHTML = lostcount += 1;
    message.style.fontSize = "30px";
    message.style.backgroundColor = "red";
  } else {
    message.innerHTML = "You Won from Paper";
    box1.innerHTML = wincount += 1;
    message.style.fontSize = "30px";
    message.style.backgroundColor = "green";
  }
};
