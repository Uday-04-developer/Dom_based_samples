let heading= document.querySelector("h3");
let accept= document.getElementById("want");
let cancel= document.getElementById("dontwant");
let name = document.getElementById("name");
let image = document.getElementById("image");
let change = 1;

accept.addEventListener("click",function(){
    if(change){
    heading.textContent="Request Accepted";
    cancel.style.display="none";
    accept.style.width="100%";
    accept.style.backgroundColor="hsla(0, 0%, 100%, 0.793)";
    accept.textShadow="none"; //tex;t shadow
    accept.style.color="rgb(14, 165, 95)";
    accept.textContent="Message";
    change==1;
}

})

cancel.addEventListener("click",function(){
    if(change==1){
    image.setAttribute("src","https://images.unsplash.com/photo-1525337187502-a0dbdfb0286f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    name.textContent="Shezal vots";
    change=true;
    }

    
})
