console.log("jeg er i ddcolor.js")

const colArray = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "black", "white"]

const pbFillDropdown = document.getElementById("pbFillDropDown")
console.log(pbFillDropdown)

const ddColors = document.getElementById("ddColors")
const bdy = document.querySelector("body")
console.log(bdy)


function fillDropdown(item) {
    console.log(item)
    const el = document.createElement("option")
    el.textContent = item
    ddColors.appendChild(el)
}

function addColors() {
    console.log("addColors")
    ddColors.innerHTML=""
    colArray.forEach(fillDropdown);
}
function setBackgroundColor() {
    const selindex = ddColors.selectedIndex;
    const selectedOption = ddColors.options[selindex];
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color
}

ddColors.addEventListener('change', setBackgroundColor)
pbFillDropdown.addEventListener("click", addColors)