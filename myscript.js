let unlocker=document.getElementById("hidden-unlocker");
let hiddenpath=document.getElementById("hidden-path");
let body=document.getElementsByName("html");
function defaultdisplay(a, b){
    a.style.display="initial";
    b.style.display="initial";
}
unlocker.addEventListener("mouseover", ()=>{
    setTimeout(()=>{
        hiddenpath.style.display="block";
        unlocker.style.display="none";
    }, 500);
})
hiddenpath.addEventListener('mouseout', ()=>{
    setTimeout(()=>{
        hiddenpath.style.display="none";
        unlocker.style.display="block";
    },3000);
})

