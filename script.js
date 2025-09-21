let rows;
let boxes;
const playzone = document.querySelector(".playzone");
let resolution = 16;
const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => { clearBoxes() });
const resizeButton = document.querySelector(".resize");
resizeButton.addEventListener("click", () => { resize() });




function clearBoxes() {
    boxes.map((box) => { box.setAttribute("class", "box") })
}

function createGrid() {
    for (let i = 0; i < resolution; i++) {
        let row = document.createElement("div");

        for (let j = 0; j < resolution; j++) {
            row.appendChild(document.createElement("div")).setAttribute("class", "box");
        }
        playzone.appendChild(row).setAttribute("class", "row");
    }
    rows = Array.from(document.querySelectorAll(".row"));
    boxes = Array.from(document.querySelectorAll(".box"));
    boxes.map((box) => { box.addEventListener("mouseover", (event) => { box.setAttribute("class", "box filled") }) });
}
function resize() {
    resolution = parseInt(prompt("enter new resolution", "16"), 10);
    if (isNaN(resolution))
        resolution = 16
    if (resolution <= 0)
        resolution = 1;
    if (resolution > 100)
        resolution = 100;
    boxes.map((box) => { box.remove() });
    rows.map((row) => { row.remove() });
    createGrid();

}
createGrid();

