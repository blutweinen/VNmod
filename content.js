// var images = document.getElementsByTagName('img');
// for (var i = 0, l = images.length; i < l; i++) {
//   images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
// }

/* Set opacity to 0 for non-focused text */

// Sourced from https://dev.to/karataev/set-css-styles-with-javascript-3nl5 and modified to this usecase
var style = document.createElement('style');
style.innerHTML = `
.scroll-detect > :not(.tag-block-pin):not(.tag-block-inline-pin) {
opacity:    0;
transition: opacity 0.3s ease-in;
`;
document.head.appendChild(style);

// var style = document.createElement('style');
// document.head.appendChild(style);
// style.sheet.insertRule('.scroll-detect > :not(.tag-block-pin):not(.tag-block-inline-pin) {opacity:    0; transition: opacity 0.3s ease-in;');

/* Add an onClick() eventlistener that can emulate a keypress, triggering the down arrow keypress logic */
/* Resolved bug: On mobile, text will scroll when clicking into the men
    Originally tried using the text-area div, but that ended up accepting any click anywhere on screen
*/



document.getElementsByClassName("text text-shadow resizable-text")[0].addEventListener("click", pressKey);


function pressKey() {
    console.log("click detected");
    document.dispatchEvent(new KeyboardEvent('keydown', {'keyCode': 39}));
};