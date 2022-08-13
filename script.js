const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(eventL)=>{

    const x = eventL.pageY - btnEl.offsetTop;
    console.log(x);
    const y = eventL.pageX - btnEl.offsetLeft;
    console.log(y);

    btnEl.style.setProperty("--xOff" , x + "px");
    btnEl.style.setProperty("--yOff" , y + "px");
}
);