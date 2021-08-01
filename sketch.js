window.onload = createGrid();

function createGrid(){
    let size = 30;
    const container = document.querySelector(".container");
    for(i = 0; i < 16*16; i++){
        let divGrid = document.createElement("div");
        divGrid.classList.add("grid");
        divGrid.style.width = `${size}px`;
        divGrid.style.height = `${size}px`;
        divGrid.style.backgroundColor = "white";
        container.style.maxWidth = `${16*size}px`;
        divGrid.style.display = "inline-block";
        divGrid.style.verticalAlign = "top";
        container.appendChild(divGrid);
    }
}

let squares = document.querySelectorAll(".grid");

squares.forEach(function(square){
    square.onmouseover = function(){
        this.style.backgroundColor = "black";
    }
})
