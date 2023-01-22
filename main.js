const arraySize = document.getElementById("array-size")
const barWrap = document.getElementById("bar-wrap")
const createArrayButton = document.getElementById("create-array-button")
const sortButton = document.getElementById("sort-button")

let array = document.querySelectorAll(".bar")

const timer = ms => new Promise(res => setTimeout(res, ms))

function randNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min
}

function update() {
    array = document.querySelectorAll(".bar")
}

function createArray(aSize, bWrap) {
    bWrap.innerHTML = ''

    for(let a = 0; a < aSize.value; a++) {
        const div = document.createElement("div")
        div.classList.add("bar")
        div.style.height = `${randNum(10, 200)}px`
        bWrap.appendChild(div)
    }

    update()
}

async function bubbleSort(arr) {
    console.clear()
    for(let i = 0; i < arr.length; i++) {
        console.log("Itteration ", i)
        for(let x = 0; x < arr.length - 1; x++) {
            setTimeout(function() {

            }, )
            arr[x].classList.add("selectedFirst")
            arr[x+1].classList.add("selectedSecond")
            let temp;
            if(arr[x].clientHeight > arr[x+1].clientHeight) {
                temp = arr[x].style.height
                arr[x].style.height = arr[x+1].style.height
                arr[x+1].style.height = temp
            }
            await timer(50);
            arr[x+1].classList.remove("selectedSecond")
            arr[x].classList.remove("selectedFirst")
        }
    }
}

createArrayButton.addEventListener('click', function(){createArray(arraySize, barWrap)})
sortButton.addEventListener('click', function(){bubbleSort(array)})
document.addEventListener("load", createArray(arraySize, barWrap));