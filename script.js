//selecting the box,overlay,plusbutton
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".box")
var addpopupbutton=document.getElementById("show")

addpopupbutton.addEventListener( "click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"

})
//select cancelbook
 var cancelbutton=document.getElementById("cancelbook")

 cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
 })

 //selecting container, addbook,book-title-input,book-author-input,short-decription-input

 var container=document.querySelector(".container")
 var add=document.getElementById("addbook")
 var booktitle=document.getElementById("book-title-input")
 var bookauthor=document.getElementById("book-author-input")
 var bookdescription=document.getElementById("short-decription-input")

 add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdescription.value}</p>
            <button class="close" onclick="erase(event)">Delete</button>`

    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
    
 })
 function erase(event){
    event.target.parentElement.remove()

 }
