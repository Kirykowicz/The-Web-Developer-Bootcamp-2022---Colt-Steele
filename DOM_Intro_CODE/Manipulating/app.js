const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134)";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
}

console.log("can I console log?");
console.log("Yes, yes I can");

const allImages = document.getElementsByTagName("img");

// took the first image, and looped over all the images to make them the same.
/* for (let img of allImages) {
  img.src =
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
} */

const squareImage = document.getElementsByClassName("square");

/* for (let img of squareImage) {
  img.src =
    "https://images.unsplash.com/photo-1516247897763-0f4ad94c2668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60";
} */
