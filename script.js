let input = document.querySelector("input");
let ul = document.querySelector("ul");
let btn =  document.querySelector("button");

btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
  

    let del =  document.createElement("button");
    del.innerText = "Delete";
   item.appendChild(del);
    // let li = document.querySelector("li");
    del.addEventListener("click",()=>{
        item.classList.add("delete");
    })


})