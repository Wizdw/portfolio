let unlocker=document.getElementById("hidden-unlocker");
let hiddenpath=document.getElementById("hidden-path");
let body=document.getElementsByName("html");
unlocker.addEventListener("mouseover", ()=>{
    setTimeout(()=>{
        hiddenpath.style.display="block";
    }, 500)
})
body.addEventListener('click', ()=>{
    setTimeout(()=>{
        hiddenpath.style.display="none";
    })
})