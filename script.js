let btnUsername = document.getElementById("btnUsername")
let inpUsername = document.getElementById("username")


btnUsername.onclick = function() {
    localStorage.setItem("username",inpUsername.value)
    window.location.href="welcome.html"

}

// Function to show the heading and the nav
function showHeading() {
    const heading = document.querySelector('.heading')
    const header = document.querySelector('header')
    heading.style.opacity = '1'
    header.style.opacity = '1' // Set opacity to 1
}
function showHeading2() {
    const heading2 = document.querySelector('.heading2')
    const username = document.querySelector('#username-box')
    heading2.style.opacity = '1'
    username.style.opacity = '1'
}
    
// Call the function after a delay
window.onload = function() {
    setTimeout(showHeading, 1000) // Delay in milliseconds
    setTimeout(showHeading2, 3500) 
}

function getRandomLetter() {
    //Not x
    var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P','Q', 'R', 'S', 'T','U','V','W','Y','Z'];
    return LETTERS[Math.floor(Math.random() * LETTERS.length)];
  }