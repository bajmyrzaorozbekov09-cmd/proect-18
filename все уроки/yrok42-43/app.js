const taitel=window.document.getElementsByTagName("h1") //macif
const cards=document.getElementsByClassName("card") //macif
const info=document.getElementById("info") //no 

// const cards=document.guerySelectorALL(".card")

console.log(taitel[2].innerText);


// taitel[2].innerText="хорошего дня"
// taitel[2].innerHTML="<i>хорошего дня</i>"
taitel[2].innerHTML="<strike>хорошего дня</strike>"
taitel[2].style.color="red"
taitel[2].style.backgroundColor="blue"


console.log(cards);

cards[2].innerHTML="this a new text"


console.log(info);
info.innerHTML="my name is baha"
