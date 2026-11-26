const data = [
    {
        id:1,
        title:"iphone",
        img:"",
        storage:128
    }
]

function getData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}
console.log(getData());
