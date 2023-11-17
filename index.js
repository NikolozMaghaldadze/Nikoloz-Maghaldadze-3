let interval =setInterval(countdown, 1000);
let timer = 20;
function countdown(){
    console.log(timer);
    let spanElement = document.querySelectorAll(".span");
    spanElement.forEach(element => {
        element.innerText = timer;
    });
    timer--;
    if(timer === -1){
        displayError();
        clearInterval(interval);
    }
}

function displayError(){
    let price = document.querySelector(".price");
    let errorWrapper = document.querySelector(".timeout");
    let timeout_text = document.createElement("div");
    timeout_text.innerText = "Not for sale";
    errorWrapper.innerHTML = " ";
    errorWrapper.appendChild(timeout_text);
    price.setAttribute("style","display:none");

}

let link = document.querySelectorAll(".link");
let overlay = document.getElementById("overlay");
link.forEach(l => {
    l.addEventListener("click", ()=>{
        overlay.classList.add("active");
        overlay.addEventListener("click", ()=>{
            overlay.classList.remove("active")
        })
    })
});
