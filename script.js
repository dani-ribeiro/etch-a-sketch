let container = document.getElementById("grid");
const clearBtn = document.getElementById("clear");

setupGrid();
clearBtn.addEventListener('click', () => reloadGrid());

function setupGrid(){
    const numGridRowsCols = prompt("Enter how large the grid should be (Ex: '64' creates a 64x64 grid) max: 100");
    container.style.gridTemplateColumns = `repeat(${numGridRowsCols}, auto)`;

    for(let i=0;i<numGridRowsCols;i++){
        for(let j=0;j<numGridRowsCols;j++){
            let cell = document.createElement("div");
            cell.className = "cell";
            
            cell.addEventListener('mouseover', () => cell.style.backgroundColor= "red");


            container.appendChild(cell);
        }
    }

}

function reloadGrid(){
    clearGrid();
    setupGrid();
    console.log("clear once");
}

function clearGrid(){
    grid.innerHTML = '';
}