const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calculate = document.querySelector("button");
calculate.addEventListener('click', ()=>{
    let w = Number(weight.value);
    let h = Number(height.value);
    const element = document.getElementById("result");
    let ans = (w/(h*h)).toFixed(3);
    element.textContent = "Result: "+ans;
    const level = document.getElementById("review");
    if(ans<18.5)level.innerHTML = "Review: Under Weight";
    else if(ans>=18.5 && ans<=25)level.innerHTML = "Review: Normal Weight"
    else if(ans>25 && ans<=29.9)level.innerHTML = "Review: Over Weight"
    else level.innerHTML = "Review: Obese";
})