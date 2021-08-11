const changeBtn = document.getElementById("changeBtn");



// function that changes html body background color
const changeBackgroundColor = () => {
  const randomColor = getRandomColor();

  document.body.style.backgroundColor = randomColor;
}

// events
changeBtn.addEventListener("click", changeBackgroundColor);