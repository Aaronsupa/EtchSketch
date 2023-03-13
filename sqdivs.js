const gridsize = 16;
const container = document.querySelector(".container");
for (let i = 0; i < gridsize; i++){
    const div = document.createElement("div");
    div.classList.add('div');
    container.appendChild(div);
}

const boxes = document.querySelectorAll(".div")

boxes.forEach((div) => {
    div.addEventListener("click", () =>{
        div.style.backgroundColor = "#00FF00"
    })
})