import config from "./config.js"


function highlightCurrentElement(index) {
    document.getElementById(`bar_${index}`).classList.add("currentHighlight")
}

function dehighlightCurrentElement(index) {
    document.getElementById(`bar_${index}`).classList.remove("currentHighlight")
}

function swapElements(index1, index2) {
    var element1 = document.getElementById(`bar_${index1}`)
    var element2 = document.getElementById(`bar_${index2}`)
    var firstValue = element1.childNodes[1].innerHTML
    var secondValue = element2.childNodes[1].innerHTML
    element1.style.height = `calc(${secondValue} / ${config.randomMax} * (100% - 40px))`
    element1.childNodes[1].innerHTML = secondValue
    element2.style.height = `calc(${firstValue} / ${config.randomMax} * (100% - 40px))`
    element2.childNodes[1].innerHTML = firstValue
}

function setElement(index, value) {
    console.log("index:\t", index, "value:\t", value)
    var element = document.getElementById(`bar_${index}`)
    element.style.height = `calc(${value} / ${config.randomMax} * (100% - 40px))`
    element.childNodes[1].innerHTML = value
}



export default { highlightCurrentElement, dehighlightCurrentElement, swapElements, setElement }