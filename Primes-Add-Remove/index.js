const $btnRemoveAll = document.getElementById('removeAll'),
      $btnPrime = document.getElementById('primesBtn'),
      $buttonAdd = document.getElementById('add'),
      $buttonRemove = document.getElementById('remove'),
      $wrapper = document.querySelector('.wrapper'),
      $card = document.querySelector('.card'),
      isPrime = n => {
        let coun = 0
        const arr = []
      
        for (let i = 1; i <= n; i++) {
          (n % i !== 0) ? arr.push(true) : arr.push(false) // false === prime Number
        }
        
        for (let i = 0; i < n; i++) if(arr[i] === false) coun++
      
        if((coun === 2) || (n === 1) || (n === 2)) return true
        
        return false
      }

let $cards = document.querySelectorAll('card'),
    $lastItemCard = $cards.item($cards.length - 1),
    $newCard = $card.cloneNode()

function addCardAnimate($newCard, rnd){
  $newCard.style.transitionDuration = '.3s'
  $newCard.style.opacity = "0"
  setTimeout(() => {
    $newCard.style.opacity = '100'
    $newCard.append(rnd)
  }, 300)
}

function removeCardAnimate($lastItemCard){
  $lastItemCard.style.transitionDuration = '.2s'
  $lastItemCard.style.opacity = "0"
  setTimeout(() => {
    $lastItemCard.remove()
  }, 200)
}

$card.append(0 | Math.random()*100)

$buttonAdd.addEventListener('click', () => {
  let rnd = 0 | Math.random() * 100
  
  $newCard = $card.cloneNode()
  
  addCardAnimate($newCard, rnd)
  
  $wrapper.insertAdjacentElement('beforeend', $newCard)
})

$btnPrime.addEventListener('click', () => {
  $cards = document.querySelectorAll('.card')
  $lastItemCard = $cards.item($cards.length - 1)

  if ($lastItemCard !== null){
    $cards.forEach($card => {
      if (isPrime(parseInt($card.textContent))){
        $card.style.color = '#f44'
        $card.style.setProperty('--orange', '#fc8')
      }
    })
  }
})

$buttonRemove.addEventListener('click', () => {
  let $cards = document.querySelectorAll('.card'),
      $lastItemCard = $cards.item($cards.length - 1)

  if ($lastItemCard !== null) {
    removeCardAnimate($lastItemCard)
  }
})

$btnRemoveAll.addEventListener('dblclick', () => {
  $lastItemCard = $cards.item($cards.length - 1)

  if ($lastItemCard !== null) {
    $cards = document.querySelectorAll('.card')
    $cards.forEach($card => $card.remove())
  }
})