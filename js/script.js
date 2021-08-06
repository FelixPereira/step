let lineThrough = document.querySelector(".line-through");
let steps = document.querySelectorAll(".step");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let correntActive = 1;


function move(){

    steps.forEach((step, idx) =>{
        if(correntActive > idx){
            step.classList.add("active");
        } else{
            step.classList.remove("active");
        }
    });


    const actives = document.querySelectorAll(".active");

    lineThrough.style.width = (actives.length - 1) / (steps.length - 1) * 100 + "%";
    
    if(correntActive === steps.length){
        next.classList.add("disabled");
    } else if(correntActive === 1){
        prev.classList.add("disabled");
    } else{
        next.classList.remove("disabled");
        prev.classList.remove("disabled");
    }
}


next.addEventListener("click", () =>{
    correntActive++;

    move()
});


prev.addEventListener("click", () =>{
    correntActive--;
    move()
});