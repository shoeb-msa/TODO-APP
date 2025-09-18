let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let del = document.createElement("button");
    item.innerText = input.value;

    del.classList.add("delete");
    del.innerText = "delete"

    item.appendChild(del);
    ul.append(item)
    input.value="";
})

ul.addEventListener("click",function(e){
   let target = e.target;
   let par = target.parentElement;
   if(target.nodeName=="BUTTON"){
   par.remove();
   }
})