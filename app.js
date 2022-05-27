let countEl = document.getElementById('count-el')
let totalPassenger = document.getElementById('total-passenger')
let count = 0
let totalPassenger = count

function increment (){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function decrement (){
    count = count - 1
    countEl.innerText = count
    console.log(count)
}
