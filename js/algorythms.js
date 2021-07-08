import config from "./config.js"
import delay from "./delay.js";
import changeView from "./changeView.js"



var working = false

function checkIfAlreadyWorking() {
    if (!!working) return true
    changeView.disalbeConfig()
    working = true
}

async function bubbleSort(array) {
    if (!!checkIfAlreadyWorking()) return
    for (let index = 0; index < array.length; index++) {
        for (let index2 = 0; index2 < array.length - index - 1; index2++) {
            changeView.highlightCurrentElement(index2)
            changeView.highlightCurrentElement(index2 + 1)
            if (array[index2] > array[index2 + 1]) {
                let tmp = array[index2]
                array[index2] = array[index2 + 1]
                array[index2 + 1] = tmp
                changeView.swapElements(index2, index2 + 1)
            }
            await delay(10)
            changeView.dehighlightCurrentElement(index2)
            changeView.dehighlightCurrentElement(index2 + 1)
        }
    }
    changeView.enableConfig()
    working = false
    return array
}

async function selectSort(array) {
    if (!!checkIfAlreadyWorking()) return
    for (var index = 0; index < array.length; index++) {
        changeView.highlightCurrentElement(index)
        var min = index
        for (var index2 = index + 1; index2 < array.length; index2++) {
            changeView.highlightCurrentElement(index2)
            if (array[index2] < array[min]) {
                min = index2
            }
            await delay(10)
            changeView.dehighlightCurrentElement(index2)
        }
        var temp = array[index]
        array[index] = array[min]
        array[min] = temp
        changeView.swapElements(index, min)
        await delay(0)
        changeView.dehighlightCurrentElement(index)
    }
    changeView.enableConfig()
    working = false
    return array
}

async function countSort(array) {
    if (!!checkIfAlreadyWorking()) return
    let index = config.randomMin
    var index2 = 0
    var count = []
    for (index; index <= config.randomMax; index++) {
        count[index] = 0
    }
    for (index = 0; index < array.length; index++) {
        changeView.highlightCurrentElement(index)
        count[array[index]] += 1
        await delay(10)
        changeView.dehighlightCurrentElement(index)
    }
    for (index = config.randomMin; index <= config.randomMax; index++) {
        while (count[index] > 0) {
            changeView.highlightCurrentElement(index2)
            array[index2] = index
            changeView.setElement(index2, index)
            await delay(10)
            changeView.dehighlightCurrentElement(index2)
            index2++
            count[index]--
        }
    }
    changeView.enableConfig()
    working = false
    return array
}

async function cocktailSort(array) {
    if (!!checkIfAlreadyWorking()) return
    var start = 0
    var end = array.length
    var swapped = true
    while (!!swapped) {
        swapped = false
        for (var index = start; index < end; index++) {
            changeView.highlightCurrentElement(index)
            if (array[index] > array[index + 1]) {
                var temp = array[index]
                array[index] = array[index + 1]
                array[index + 1] = temp
                changeView.swapElements(index, index + 1)
                swapped = true
            }
            await delay(0)
            changeView.dehighlightCurrentElement(index)
        }
        if (!swapped) { break }
        swapped = false
        end--
        for (var index = end - 1; index >= start; index--) {
            changeView.highlightCurrentElement(index)
            if (array[index] < array[index - 1]) {
                var temp = array[index]
                array[index] = array[index - 1]
                array[index - 1] = temp
                changeView.swapElements(index, index - 1)
                swapped = true
            }
            await delay(0)
            changeView.dehighlightCurrentElement(index)
        }
        start++
    }
    changeView.enableConfig()
    working = false
    return array
}

async function gnomeSort(array) {
    if (!!checkIfAlreadyWorking()) return
    for (var index = 0; index < array.length; index++) {
        changeView.highlightCurrentElement(index)
        var swapped = false
        if (array[index] > array[index + 1]) {
            var temp = array[index]
            array[index] = array[index + 1]
            array[index + 1] = temp
            changeView.swapElements(index, index + 1)
            swapped = true
        }
        await delay(0)
        changeView.dehighlightCurrentElement(index)
        if (swapped) {
            if (index > 0) index -= 2
        }
    }
    changeView.enableConfig()
    working = false
    return array
}

export default { bubbleSort, selectSort, countSort, cocktailSort, gnomeSort }