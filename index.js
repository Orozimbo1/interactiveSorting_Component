const ratings = document.querySelectorAll('li');
const submit = document.querySelector('#submit')
const start = document.querySelector('#start')
const end = document.querySelector('#end')
const span = document.querySelector('span')

let rate;

const removeClassActive = () => {
  for(let i = 0; i < ratings.length; i++) {
    if(ratings[i].classList.contains('active')) ratings[i].classList.remove('active')
  }
}

for(let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener('click', function() {
    removeClassActive()
    rate = this.textContent
    this.classList.add('active')
  })
}

submit.addEventListener('click', () => {
  if (!rate) {
    alert('You have to choose a rating')
    return
  }
  start.classList.add('hidden')
  span.innerText = rate
  end.classList.add('show')
})

// removeClass()