let inputs = document.getElementById("input2");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("plz Enter Task")
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML= `${inputs.value}<span class="material-symbols-outlined">
        delete
        </span>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("span").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}