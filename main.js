import config from "./js/config.js"
import generateBarElement from "./js/barElement.js";
import algorythms from "./js/algorythms.js";



var baseArray = []
var barAmount = 0
initialize()

function initialize() {
    document.getElementById("configAlgorythm").addEventListener("input", () => {
        baseArray = generateArray(barAmount)
        setBarElements(baseArray)
    })
    var algorythmContainer = document.getElementById("algorythmShowContainer")
    var algorythmContainerWidth = window.getComputedStyle(algorythmContainer).getPropertyValue("width")
    algorythmContainerWidth = algorythmContainerWidth.slice(0, algorythmContainerWidth.length - 2)
    barAmount = Math.round(algorythmContainerWidth / 7)
    
    baseArray = generateArray(barAmount)
    setBarElements(baseArray)

    document.getElementById("actionStart").addEventListener("click", startAlgorythm)
    document.getElementById("actionReset").addEventListener("click", resetView)
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

function startAlgorythm() {
    const algorythm = document.getElementById("configAlgorythm").value
    algorythms[algorythm](baseArray)
}

function resetView() {
    baseArray = generateArray(barAmount)
    setBarElements(baseArray)
}