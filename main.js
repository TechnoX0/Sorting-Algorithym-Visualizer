const arraySize = document.getElementById("array-size")
const barWrap = document.getElementById("bar-wrap")
const createArrayButton = document.getElementById("create-array-button")
const sortButton = document.getElementById("sort-button")

let array = document.querySelectorAll(".bar")

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function update() {
    
}

function createArray(aSize, bWrap) {
    bWrap.innerHTML = ''

    for(let a = 0; a < aSize.value; a++) {
        const div = document.createElement("div")
        div.classList.add("bar")
        div.style.height = `${randNum(10, 200)}px`
        bWrap.appendChild(div)
        console.log("hello")
    }
}

function bubbleSort(arr) {
    console.log(arr)
}

createArrayButton.addEventListener('click', function(){createArray(arraySize, barWrap)})
sortButton.addEventListener('click', function(){bubbleSort(array)})
document.addEventListener("load", createArray(arraySize, barWrap));