import config from "./js/config.js"
import generateBarElement from "./js/barElement.js";
import algorythms from "./js/algorythms.js";



var baseArray = []

initialize()

function initialize() {
    var algorythmContainer = document.getElementById("algorythmShowContainer")
    var algorythmContainerWidth = window.getComputedStyle(algorythmContainer).getPropertyValue("width")
    algorythmContainerWidth = algorythmContainerWidth.slice(0, algorythmContainerWidth.length - 2)
    var barAmount = Math.round(algorythmContainerWidth / 7)

    baseArray = generateArray(barAmount)
    console.log(baseArray)
    setBarElements(baseArray)

    document.getElementById("action_start").addEventListener("click", startAlgorythm)
}

function generateArray(amount) {
    var array = []
    for (var index = 0; index < amount; index++) array.push(Math.round(Math.random() * (config.randomMax - config.randomMin) + config.randomMin))
    return array
}

function setBarElements(array) {
    var innerHTML = ""
    for (var index = 0; index < array.length; index++) {
        innerHTML += generateBarElement(index, array[index])
    }
    document.getElementById("algorythmShowContainer").innerHTML = innerHTML
}

async function startAlgorythm() {
    const algorythm = document.getElementById("configAlgorythm").value
    algorythms[algorythm](baseArray)
}