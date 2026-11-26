const num = document.getElementById("num")
const btns = document.querySelectorAll("button")


console.log(btns);

// // btns[0].style.backgroundColor="green"

let count = 0
btns[0].onclick = () => {
  count++
  num.innerHTML = count
}

btns[1].onclick = () => {
  count=0         
  num.innerHTML = count
}
btns[2].onclick = () => {
  count--
  num.innerHTML = count
}