const bet = document.getElementById("bet")
const body = document.querySelector("body")
const inp1 = document.getElementById("inp1")
const inp2 = document.getElementById("inp2")
const znak = document.getElementById("znak")
const resalt = document.getElementById("resalt")

function kalk() {
    const v1 = Number(inp1.value)
    const v2 = Number(inp2.value)
    const z = znak.value

    if (z === "+") {
        resalt.innerHTML = v1 + v2
    } else if (z === "-") {
        resalt.innerHTML = v1 - v2
    } else if (z === "*") {
        resalt.innerHTML = v1 * v2
    } else if (z === "/") {
        resalt.innerHTML = v1 / v2
    }

}

bet.onclick = () => {
    kalk()
}


// inp.oninput = ()=>{
//     but.innerHTML = inp.value
//     body.style.backgroundColor=inp.value
// }
// but.onclick = () =>{
//     const isClicked = confirm("Подтвердите")
//     if (isClicked === true){
//         body.style.backgroundColor = "green"
//     } else {
//         alert("вы неподтвердили")
//     }
// }

// bet.onclick = () =>{
//     const isClicked = confirm("Подтвердите")
//     if (isClicked === true){
//         body.style.backgroundColor = "blue"
//     } else {
//         alert("вы неподтвердили")
//     }
// }

