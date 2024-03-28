const container = document.querySelector("#container");
const div = document.createElement("div");

const button = document.createElement("button");

const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
button.textContent = "Change Size"
button.classList.add("modifier")
container.parentNode.appendChild(button);



gridGenerator(16);
        

button.addEventListener("click", e => {
    let size = prompt("Set size between 1 and 100:");
    if (size < 1 || size > 100) size = prompt("Set size between 1 and 100:");
    container.childNodes.forEach(child => container.removeChild(child));
    container.innerHTML = "";
    gridGenerator(size);
});

function gridGenerator(count) {
    for(let i = 1; i <= count; i++) {
        for(let i = 1; i <= count; i++){
            container.appendChild(document.createElement("div"));
            container.lastChild.style.flex = `1 1 ${100/count}%`;
        }
    }
    container.childNodes.forEach(child => child.addEventListener("mouseleave", e => {
        let r = randomBetween(0, 255);
        let g = randomBetween(0, 255);
        let b = randomBetween(0, 255);
        child.style.backgroundColor = `rgb(${r},${g},${b})`;
    }));
}



// function removeAllChildNodes(parent) {
//     while (parent.firstChild) {
//         parent.removeChild(parent.firstChild);
//     }
// }
