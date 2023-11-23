var ip=document.getElementById("input")
var bt=document.getElementById("button")
var ul=document.getElementById("ul")

bt.addEventListener("click" , function(){
    var task=ip.value
    ip.value=""
    add(task)
})

function add(task){
    var li=document.createElement("li")
    li.innerHTML=task
    ul.appendChild(li)
}