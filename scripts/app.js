const changeBtn = document.getElementById("changeBtn");
const msg = document.getElementById("msg");

const updateMessageUI = hexColor => {
  msg.innerHTML = hexColor;
}

// function that generates a random hex color value and returns it
const getRandomHexColor = () => {
  const hexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  const hexLen = hexes.length;
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexLen);
    const hexValue = hexes[randomIndex];
    hexColor += hexValue;
  }

  updateMessageUI(hexColor);

  return hexColor;
};

// function that changes html body background color
const changeBackgroundColor = () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
};

// events
changeBtn.addEventListener("click", changeBackgroundColor);