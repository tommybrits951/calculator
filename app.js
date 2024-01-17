const display = document.querySelector("#display");
const btnContainer = document.querySelector("#btns");

const btnNames = [
  "C",
  "+",
  "-",
  "(",
  "1",
  "2",
  "3",
  ")",
  "4",
  "5",
  "6",
  "x",
  "7",
  "8",
  "9",
  "/",
  ".",
  "0",
  "DEL",
  "=",
];
let btnsArr = [];
console.log(btnNames.length);
for (let i = 0; i < btnNames.length; i++) {
  const elem = document.createElement("button");
  elem.classList.add("btn");
  elem.innerText = btnNames[i];
  btnsArr.push(elem);
  btnContainer.append(elem);
}
btnsArr.forEach((btn) => {
  if (btn.innerText === "C") {
    btn.style.backgroundColor = "red";
  } else if (btn.innerText === "DEL") {
    btn.style.backgroundColor = "darkgrey";
  } else if (
    btn.innerText === "+" ||
    btn.innerText === "-" ||
    btn.innerText === "x" ||
    btn.innerText === "/"
  ) {
    btn.style.backgroundColor = "orange";
  } else if (btn.innerText === "(" || btn.innerText === ")") {
    btn.style.backgroundColor = "purple";
  } else if (btn.innerText === "=") {
    btn.style.backgroundColor = "green";
  } else {
    btn.style.backgroundColor = "black";
    btn.style.color = "white";
  }
});

btnsArr.map((btn) => {
  btn.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "DEL":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "C":
        display.innerText = "";
        break;
      case "=":
        display.innerText = eval(display.innerText);
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
