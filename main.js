let total = 0

document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#add20').addEventListener('click', add20)
document.querySelector('#add15').addEventListener('click', add15)
document.querySelector('#subtract5').addEventListener('click', subtract5)
document.querySelector('#subtract10').addEventListener('click', subtract10)

function zero(){
total = 0
document.querySelector('#placeToPutResult').innerText = total
}
function add20(){
  total = total + 20
  document.querySelector('#placeToPutResult').innerText = total
  }
function add15(){
  total = total + 15
  document.querySelector('#placeToPutResult').innerText = total
}
function subtract5() {
  total = total -5
  document.querySelector('#placeToPutResult').innerText = total
}
function subtract10(){
total = total - 10
document.querySelector('#placeToPutResult').innerText = total
}