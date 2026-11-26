const root=document.querySelector("#root")

const url="https://fakestoreapi.com/products"


const getProducts=async()=>{
    const res=await fetch(url)
    const data=await res.json()
    console.log(data);
    showProducts(data)
}
getProducts()

function showProducts(arr){
   for (const pr of arr ) {
    root.innerHTML+=`
      <section class="card" style="max-width: 320px">
  <img src=${pr.image} class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title">Card title ${pr.TITLE}</h4>
    <p class="card-text">${pr.description.length>30 ? pr.
        description.slice(0,30) +" ...": pr.description}.</p>
    // <a href="#" class="btn-solid theme-primary">Go somewhere</a>
  </div>
</section>
    `
   }
}