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

const workBtn = document.querySelectorAll('#work-btn')
const cardContent = document.querySelectorAll('#card-content')
const cardContentContainer = document.querySelectorAll('#card-content-container')

for(let i = 0; i < workBtn.length; i++){
  workBtn[i].addEventListener('click', () => {
    cardContent[i].classList.toggle('show')

    setTimeout(() => {
      cardContentContainer[i].classList.toggle('show')
    }, 600)
  })
}

const close = document.querySelectorAll('#close')

for(let i = 0; i < close.length; i++){
  close[i].addEventListener('click', () => {
    cardContent[i].classList.remove('show')
  })
}

const contactForm = document.getElementById('contact__form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  let name = document.getElementById('name')
  let email = document.getElementById('email')
  let message = document.getElementById('message')

  let formData = {
    name: name.value, 
    email: email.value, 
    message: message.value
  }

  let xhr = new XMLHttpRequest()
  xhr.open('POST', '/')
  xhr.setRequestHeader('content-type', 'application/json')
  xhr.onload = function(){
    console.log(xhr.responseText)
    if(xhr.responseText === 'success'){
      alert('Email Sent!')
      name.value = ""
      email.value = ""
      message.value = ""
    } else{
      alert('Something went wrong!')
    }
  }

  xhr.send(JSON.stringify(formData))
})