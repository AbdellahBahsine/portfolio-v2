const bars = document.querySelector('#bars');
const mobileMenu = document.querySelector('#mobile-menu');
const barsContainer = document.querySelector('#bars__container');

bars.addEventListener('click', () => {
    barsContainer.classList.toggle('open')
    mobileMenu.classList.toggle('open')
})

let typeText = document.querySelector("#typeText")
let textToBeTyped = "Abdellah"
let index = 0, isAdding = true 

function playAnim() {
  setTimeout(function () {

    typeText.innerText = textToBeTyped.slice(0, index)
    if (isAdding) {
      
      if (index > textToBeTyped.length) {
        
        isAdding = false
        
        setTimeout( function () {
          playAnim()
        }, 2000)
        return
      } else {
        
        index++
      }
    } else {
      
      if (index === 0) {
        
        isAdding = true
      } else {
        
        index--
      }
    }
    
    playAnim()
  }, 120)
}

playAnim()