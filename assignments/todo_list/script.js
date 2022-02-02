var add_btn = document.querySelector("button")
var div_container= document.querySelector('.todos')
var input = document.querySelector("input[name='todo_input']") 
// var remove_btn= document.querySelector("#btn_2")
var count=0

function addtodo(){
    var p_element=document.createElement('p')
    var p_text=document.createTextNode(input.value)
    p_element.appendChild(p_text)
    p_element.setAttribute('key',count)
    div_container.appendChild(p_element)
    count+=1
    p_element.addEventListener('click',function(){
        div_container.removeChild(p_element)
    })
}
add_btn.addEventListener('click',addtodo) 
// var dele = document.querySelector("p[key='"+count+"']")  
// function deleteElement(){
//     dele.remove()
// }

// dele.addEventListener('click',deleteElement)



// var input=document.querySelector("input[name='todo_input']")
// var addBtn=document.querySelector("button")
// var innerDiv=document.querySelector(".todos")
// var count=0
// addBtn.addEventListener('click',function(){
//     innerDiv.innerHTML+='<p key='+count+'>'+input.value+'</p>'
//     count+=1
// })
// removeElement=document.querySelector('p[key='+count+']')
// removeElement.addEventListener('click',function(e){
//     console.log("clicked on")
// })