const task = document.getElementById("inputbox");
const list = document.getElementById("taskcontainer");


let addToList = () =>{
    if(task.value === ''){
        alert("Please! Enter any task.");
    }else{
        let li = document.createElement("li");
        // let p = document.createElement("p");
        let span = document.createElement("span");
        li.innerHTML = task.value.trim();
        span.innerHTML = "\u00d7";
        // li.appendChild(p);
        li.appendChild(span);
        list.appendChild(li);
        // console.log(list);
    }
    task.value = '';
    saveData();
}

list.addEventListener("click", function(obj){
    if(obj.target.tagName === "LI"){
        obj.target.classList.toggle("check");
        saveData();
    }else if(obj.target.tagName === "SPAN"){
        obj.target.parentElement.remove();
        saveData();
    }
},false);

let saveData =() =>{
    localStorage.setItem("data",list.innerHTML);
}

let showData =() =>{
    list.innerHTML = localStorage.getItem("data");
}

showData();