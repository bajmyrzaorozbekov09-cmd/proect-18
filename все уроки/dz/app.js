 const car= document.getElementById("car")
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        const data = await res.json()
        console.log(data);
        data.forEach(el => {
            car.innerHTML += `
            <div>

            </div>   
            
            `
        });
    } catch (error) {
        console.log(error);
    }
}

getUsers()

      
