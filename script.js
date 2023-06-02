const result= document.querySelector(".result input");
const btn = document.getElementById("btn");
const slider = document.querySelectorAll(".slider input[type='range']");

const rc = document.getElementById("red");
const gc = document.getElementById("green");
const bc = document.getElementById("blue");
const pcont = document.getElementsByClassName("pcontainer")

let pc = ()=>{
    let rcv = rc.value;
    let gcv = gc.value;
    let bcv = bc.value;
    nc = `rgb(${rcv},${gcv},${bcv})`;
    ic = `rgb(${gcv},${bcv},${rcv})`;
    result.value = nc;
    document.getElementById("p").innerHTML="This is how i look"
    pcont[0].style.backgroundColor = nc;
    pcont[0].style.color = ic;
    btn.style.background=nc;
    btn.style.color=ic;
    if(rcv==0&&bcv==0&&gcv==0){
        pcont[0].style.color = "white";
        btn.style.color="white";
    }
    if(rcv==255&&bcv==255&&gcv==255){
        pcont[0].style.color = "black";
        btn.style.color="black";
    }

}
let cpyCode=()=>{
    result.select();
    document.execCommand("copy");
    btn.innerText="copied!";
    setTimeout(()=>{
        btn.innerText = "Copy color code";
    },1000)


}
btn.addEventListener("mouseover",()=>{
    btn.style.background="transparent"
    btn.style.color="white";

})
btn.addEventListener("mouseout",()=>{
    btn.style.background=nc
})
btn.addEventListener("click",cpyCode)
slider.forEach((inp)=>{
    inp.addEventListener("input", pc);
})