// // Get a reference to the page title element from the DOM
// let pageTitleElement = document.querySelector(`.page-title`)

// // Modify the page title element's contents
// pageTitleElement.innerHTML = `Movies to watch!`

// // Get a reference to the bulleted list of movies
// let movieList = document.querySelector(`.movies-to-watch`)

// // Add an new list item to the bulleted list of movies
// movieList.insertAdjacentHTML(`beforeend`, `
//   <li>Spaceballs</li>
// `)

// // Get a reference to the image
// let image = document.querySelector(`img`)

// // Add the `border-pink-500` class to the image element
// image.classList.add(`border-pink-500`)

// Get a refernce to the "click me" button
let clickMeButton = document.querySelector(`.click-me`)

// Event listener for click me button
clickMeButton.addEventListener(`click`, async function(event) {

  // Get a reference to the page title element from the DOM
let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
pageTitleElement.innerHTML = `Movies to watch!`
})

// Get a reference to the "add a movie link" 
let addMovieLink = document.querySelector(`.add-movie`)

// Event Listener for Add a movie
addMovieLink.addEventListener(`click`, async function(event) {
// Prevent link default behavior
  event.preventDefault()

  // Get a reference to the bulleted list of movies
let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>
`)

})

// Get a reference to zoom image button
let zoomImageButton = document.querySelector(`.zoom-image`)

// Event listener for zoom image button
zoomImageButton.addEventListener(`click`, async function(event) {

// get a reference to the image
let image = document.querySelector(`img`)
// add pink border
image.classList.toggle(`border-pink-500`)

// Make image larger
image.classList.toggle(`w-96`)
image.classList.toggle(`w-full`)

})

// get reference to change image button
let changeImageButton = document.querySelector(`.change-image`)

// Event listener for change image button
changeImageButton.addEventListener(`click`, async function(event) {

// Get reference to Image
let image = document.querySelector(`img`)

// Change image source attribute
image.setAttribute(`src`, `../images/grogu2.jpg`)

})

// get reference to say hi button
let sayHiButton = document.querySelector(`.say-hi`)

// Event listener for the say hi button
sayHiButton.addEventListener(`click`, async function(event) {

  event.preventDefault()

  // Get a reference to the first name input
  let firstNameInput = document.querySelector(`#first-name`)

  // Get value that the user entered in the first name input
  let firstName = firstNameInput.value 

  // Get a reference to the greet element
  let greetElement = document.querySelector(`.greet`)

// Check that first name has value

if (firstName.length > 0) {

  // Create sentence for element
  let sentence = `Hi, ${firstName}`

  // Replace the greet element's contents with the sentence

  greetElement.innerHTML = sentence
} else {
  greetElement.innerHTML = ``
}
})