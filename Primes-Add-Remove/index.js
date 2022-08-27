const $buttonAdd = document.getElementById('add'),
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
      
        if(coun === 2) return true
        
        return false
      }
      
$card.append(0 | Math.random()*100) //todo

$buttonAdd.addEventListener('click', () => {
  let $newCard = $card.cloneNode(),
      rnd = 0 | Math.random() * 100

  $wrapper.insertAdjacentElement('beforeend', $newCard)

  $newCard.append(rnd)
})

$buttonRemove.addEventListener('click', () => {
  let $removeCard = document.querySelectorAll('.card')

  if ($removeCard.item($removeCard.length - 1) !== null)
    $removeCard.item($removeCard.length - 1).remove()
})

setInterval(() => {
  let $cards = document.querySelectorAll('.card'),
      $lastItemCard = $cards.item($cards.length - 1)

  if ($lastItemCard !== null){
    if (isPrime(arr[arr.length - 1])){
      $lastItemCard.style.color = '#f44'
      $lastItemCard.style.setProperty('--orange', '#fc8')
    }
  }
}, 200)