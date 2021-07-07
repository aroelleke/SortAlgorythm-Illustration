import config from "./config.js"


function generateBarElement(index, value) {
    return `
        <div class="barElement" id="bar_${index}" style="height: calc(${value} / ${config.randomMax} * (100% - 40px))">
            <div class="barValue">${value}</div>
        </div>`
}

export default generateBarElement