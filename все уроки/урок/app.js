const cars =["Toyota", "Lexus", "BMW", "MERS"]
const num=[2,4,5,6,9,22]
            //   /toLoverCase/

const newCars=cars.map((car, i , cars)=>{
    return car.toUpperCase ()                    
})
console.log(cars);
console.log(newCars);


const newNum = num.map((n)=>{
     return n*n
})
 console.log(newNum);

 




 const filteredNum=num.filter((num)=>num>7)
 console.log(filteredNum)

 const summNum=num.reduce((total, n)=>{
     return total+n
 },0)    

 console.log(summNum);
 