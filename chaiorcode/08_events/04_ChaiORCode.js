//generate random color

const randomcolor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomcolor);

let intervalID;
const startChangingColor = function () {
  function changeBGColor() {
    document.body.style.backgroundColor = randomcolor();
  }
  if (!intervalID) {
    intervalID = setInterval(changeBGColor, 1000);
  }
};
document.querySelector("#start").addEventListener("click", startChangingColor);

const stopChanginColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};
document.querySelector("#stop").addEventListener("click", stopChanginColor);
