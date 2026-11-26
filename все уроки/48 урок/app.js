const input=document.querySelector("input")
const addBtn=document.getElementById("add")
const list=document.getElementById("list")


addBtn.onclick=()=>{
  if(input.value.trim().length>0){
    //  console.log(input.value);
    addElement(input.value, list)
    input.value=""
  }
   
    
    
}

function addElement(input, parent){
 const liTag=document.createElement("li")
 parent.appendChild(liTag)
 liTag.className="list-group-item d-flex align-items-center"


const spanTag=document.createElement("span")
spanTag.innerHTML=input
spanTag.className="flex-grow-1"
liTag.appendChild(spanTag)

const delBtn=document.createElement("button")
delBtn.innerHTML=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
`
delBtn.className="btn-outline theme-danger"
liTag.appendChild(delBtn)


const impBtn=document.createElement("button")
impBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`
// impBtn="btn-outline theme-warning"
impBtn.className = "btn-outline theme-warning"

liTag.appendChild(impBtn)

   delBtn.onclick=()=>{
    liTag.remove()
   }

   let isImportant=false

   impBtn.onclick=()=>{
    isImportant=!isImportant
    if(isImportant){
      spanTag.style.fontWeight="bold"
      spanTag.style.color="red"
    } else {
         spanTag.style.fontWeight="normal"
         spanTag.style.color="black" 
    }
 
   }




}





// function createli(){

// }