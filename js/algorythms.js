import config from "./config.js"
import delay from "./delay.js";
import changeView from "./changeView.js"



var working = false

function checkIfAlreadyWorking() {
    if (!!working) return true
    changeView.disalbeConfig()
    working = true
}

function swap(array, index1, index2) {
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    changeView.swapElements(index1, index2)
    return array
}

async function bubbleSort(array) {
    if (!!checkIfAlreadyWorking()) return
    for (let index = 0; index < array.length; index++) {
        console.log(array)
        for (let index2 = 0; index2 < array.length - index - 1; index2++) {
            changeView.highlightCurrentElement(index2)
            changeView.highlightCurrentElement(index2 + 1)
            if (array[index2] > array[index2 + 1]) {
                array = swap(array, index2, index2 + 1)
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
            await delay(0)
            changeView.dehighlightCurrentElement(index2)
        }
        array = swap(array, index, min)
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
                array = swap(array, index, index + 1)
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
                array = swap(array, index, index - 1)
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
            array = swap(array, index, index + 1)
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

var array_length
async function heapSort(array) {
    if (!!checkIfAlreadyWorking()) return
    array_length = array.length
    for (let index = Math.floor(array_length / 2); index >= 0; index--) {
        changeView.highlightCurrentElement(index)
        array = await heap_root(array, index)
        await delay(10)
        changeView.dehighlightCurrentElement(index)
    }
    for (let index = array.length - 1; index > 0; index--) {
        changeView.highlightCurrentElement(index)
        swap(array, 0, index)
        array_length--
        await delay(10)
        changeView.dehighlightCurrentElement(index)
        array = await heap_root(array, 0)
    }
    changeView.enableConfig()
    working = false
    return array
}

async function heap_root(array, index) {
    var left = 2 * index + 1
    var right = 2 * index + 2
    var max = index
    if (left < array_length && array[left] > array[max]) {
        max = left
    }
    if (right < array_length && array[right] > array[max]) {
        max = right
    }
    if (max != index) {
        changeView.highlightCurrentElement(index)
        changeView.highlightCurrentElement(max)
        swap(array, index, max)
        await delay(10)
        changeView.dehighlightCurrentElement(index)
        changeView.dehighlightCurrentElement(max)
        array = await heap_root(array, max)
    }
    return array
}

async function insertionSort(array) {
    if (!!checkIfAlreadyWorking()) return
    for (let index = 1; index < array.length; index++) {
        changeView.highlightCurrentElement(index)
        let current = array[index];
        let index2 = index - 1;
        while (index2 >= 0 && current < array[index2]) {
            changeView.highlightCurrentElement(index2)
            array[index2 + 1] = array[index2];
            changeView.setElement(index2 + 1, array[index2])
            await delay(10)
            changeView.dehighlightCurrentElement(index2)
            index2--;
        }
        array[index2 + 1] = current;
        changeView.setElement(index2 + 1, current)
        await delay(0)
        changeView.dehighlightCurrentElement(index)
    }
    changeView.enableConfig()
    working = false
    return array;

}

export default { bubbleSort, selectSort, countSort, cocktailSort, gnomeSort, heapSort, insertionSort }