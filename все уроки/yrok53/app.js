const root =document.querySelector("root")


const _baseUrl="https://jsonplaceholder.typicode.com"

// function getData(){
//     fetch(_baseUrl+"/users")
//     .then(req=>req.json())
//     .then (data=>{
//         console.log(data);
//         showData(data)
        
//     })

// }

async function getData() {
   const response=await fetch(_baseUrl+"/users")
   const data=await response.json()
   console.log(data);
   showData(data)
   
}

getData()

function showData(arr){
    for (const user of arr){
        root.innerHTML+=`
       <h3>${user.name}</h3>
    `
    }
 }