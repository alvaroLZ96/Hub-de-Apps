export const randomColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let newColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(newColor);
  document.body.style.background = newColor;
};

/* export const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
};

genNew.addEventListener("click", setBg);
setBg();
 */
