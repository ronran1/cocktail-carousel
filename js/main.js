
var flkty = new Flickity('.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: true,
  imagesLoaded: true,
})

document.querySelector('button').addEventListener('click', getFetch)
let elem = document.querySelectorAll('.popup')


let img = document.querySelectorAll('img')
let h4 = document.querySelectorAll('h4')
Array.from(h4).forEach(function(element) {
  element.addEventListener('click', showPopup)
})
let span = document.querySelectorAll('.popuptext')
console.log(span)
console.log(img)

function showPopup() {
  let popup1 = document.getElementById('popup1')
  let popup2 = document.getElementById('popup2')
  let popup3 = document.getElementById('popup3')
  let popup4 = document.getElementById('popup4')
  let popup5 = document.getElementById('popup5')
  popup1.classList.toggle('show')
  popup2.classList.toggle('show')
  popup3.classList.toggle('show')
  popup4.classList.toggle('show')
  popup5.classList.toggle('show')
  console.log("clicked")
}

function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.drinks[0].strInstructions)
        img[0].src = data.drinks[0].strDrinkThumb
        img[1].src = data.drinks[1].strDrinkThumb
        img[2].src = data.drinks[2].strDrinkThumb
        img[3].src = data.drinks[3].strDrinkThumb
        img[4].src = data.drinks[4].strDrinkThumb
        h4[0].innerHTML += data.drinks[0].strDrink
        h4[1].innerHTML += data.drinks[1].strDrink
        h4[2].innerHTML += data.drinks[2].strDrink
        h4[3].innerHTML += data.drinks[3].strDrink
        h4[4].innerHTML += data.drinks[4].strDrink
        document.querySelector('#popup1').textContent = data.drinks[0].strInstructions
        document.querySelector('#popup2').textContent = data.drinks[1].strInstructions
        document.querySelector('#popup3').textContent = data.drinks[2].strInstructions
        document.querySelector('#popup4').textContent = data.drinks[3].strInstructions
        document.querySelector('#popup5').textContent = data.drinks[4].strInstructions
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
