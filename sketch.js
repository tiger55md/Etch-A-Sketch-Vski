window.onload= createGrid(32);

function createGrid(gridSize){
    const container = document.querySelector(".container");
    container.style.width = "800px";
    container.style.height = "800px"
    let size = container.clientWidth / gridSize;


    for(i = 0; i < gridSize*gridSize; i++){
        let divGrid = document.createElement("div");
        divGrid.classList.add("grid");
        divGrid.style.width = `${size}px`;
        divGrid.style.height = `${size}px`;
        divGrid.style.backgroundColor = "white";
        divGrid.style.display = "inline-block";
        divGrid.style.verticalAlign = "top";
        container.appendChild(divGrid);
    }


}

function removeCell(){
    let squares = document.querySelectorAll(".grid");

    squares.forEach( square => {
        square.remove();
    });

}


let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", function(){
    let squares = document.querySelectorAll(".grid");

    squares.forEach( square => {
        square.style.backgroundColor = "white";
    });


});

function sliderUpdater(){
    let range = document.querySelector(".slider").value;
    document.querySelector(".display").textContent =`${range}x${range}`;
}

document.querySelector(".slider").addEventListener('mouseup',function(){
        sliderUpdater();
        let range = document.querySelector(".slider").value;
        removeCell();
        createGrid(range);
        makeDrawable();

    });





function makeDrawable(){
    let squares = document.querySelectorAll(".grid");

    squares.forEach(function(square){
        square.onmouseover = function(){
            this.style.backgroundColor = ("black");
        }
    })


}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

let blackBtn = document.querySelector(".black");
blackBtn.addEventListener("click", makeDrawable);

let rainbowBtn = document.querySelector(".rainbow");
rainbowBtn.addEventListener("click", function(){
    let squares = document.querySelectorAll(".grid");

    squares.forEach(function(square){
        square.onmouseover = function(){
            this.style.backgroundColor = getRandomColor();
        }
    });
});

let chooseBtn = document.querySelector("#input-color");
chooseBtn.addEventListener("click", function(){
    let squares = document.querySelectorAll(".grid");

    squares.forEach(function(square){
        square.onmouseover = function(){
            this.style.backgroundColor = chooseBtn.value;
        }
    });

})




