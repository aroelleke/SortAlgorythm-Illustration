import config from "./config.js"
import delay from "./delay.js";
import changeView from "./changeView.js"



async function bubblesort(array) {
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
    return array
}

async function selectsort(array) {
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
    return array
}

async function countsort(array) {
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
    return array
}

export default { bubblesort, selectsort, countsort }