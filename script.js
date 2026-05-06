const ratings = document.querySelector(".ratings");
const submitBtn = document.querySelector("#submit");
const container = document.body.querySelector("#container");


let rate = 0;
ratings.addEventListener('click', (e)=> {
    const selectedRate = e.target;
    if(selectedRate.tagName === "BUTTON") {
      rate = selectedRate.textContent;  
      console.log(e.target.textContent);
    }
console.log(rate);    
})


submitBtn.addEventListener('click', (e) => {
    container.innerHTML = ""
    if (document.body.className === "hidden") {
        document.body.className = "";
        container.appendChild(document.body)

    }
})