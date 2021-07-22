const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modalMessage = document.getElementById("modal-message")

const modalID = document.getElementById("modal")
modalID.className += "hidden"

mimicServerCall()

.catch(error => {
  modalID.classList.remove("hidden")
  modalMessage.innerText = error
  setTimeout(()=>{
    modalID.hidden = true
  },
  5000)  
})

const likes = document.getElementsByClassName("like-glyph")
  for (const like of likes) {
    like.addEventListener("click",(event)=>{
      mimicServerCall()
      .then(() =>{
    if (like.textContent === EMPTY_HEART){
      like.textContent = FULL_HEART
      like.className = "activated-heart"
    }
    else {
      like.textContent === FULL_HEART
      FULL_HEART.className = "like-glyph"
    }
    mimicServerCall()
  })
  })
}


function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


