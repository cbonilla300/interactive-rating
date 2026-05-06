const ratings = document.querySelector(".ratings");
const submitBtn = document.querySelector("#submit");
const container = document.querySelector("#container");
const containerRate = document.querySelector('#container-rate')
const containerThankYou = document.querySelector('#container-thank-you');


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
    containerRate.className = 'hidden';
    containerThankYou.classList.remove('hidden');
    let rating = document.querySelector('#rate')
    rating.textContent = rate
})