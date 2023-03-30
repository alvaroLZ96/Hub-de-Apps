export const randomColor = () => {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let newColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(newColor);
  document.body.style.background = newColor;
};
