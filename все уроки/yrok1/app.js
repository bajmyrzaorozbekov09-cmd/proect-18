const phones = [
    {
        id: 1,
        title: "iphone 18",
        price: 1200,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStkKpOGQe6SzbzhKqIF50mDNVssHHdJELoMrpSx15Q2Q&s=10"
    },
    {
        id: 2,
        title: "iphone 17",
        price: 1000,
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi1rhf_jj7PS2ZsX1FANV3d8SUlIgpoA4_mRsmoyAhjw&s=10"
    },
    {
        id:3,
        title:"honor",
        price:700,
        url:"https://www-file.honor.com/content/dam/honor/common/product-list/phones-list-others/honor-magic8-pro/honor-magic8-pro-gold-pc.jpg"
    }
]

const container = document.getElementById("container")
const naryto = document.getElementById("naryto")

naryto.oninput = ()=>{
const phones2 = phones.filter((el)=>el.title.toLowerCase().includes(naryto.value.toLowerCase()))
  container.innerHTML = ""
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap ="20px";
  container.style.padding = "20px"

    phones2.forEach((el)=> {
    container.innerHTML +=`
       <div>
        width: 200px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 12px;
        text-align: center;
        box-shadow: 0 2px 8px #ddd;
        bacground: white;
        ">
            <img src="${el.url}" style="
                    width: 100%;
                    height: 180px;
                    object-fit: contain;
                ">
                     <h3 style="
                    font-size: 18px;
                    color: #222;
                ">${el.title}</h3>

                <h4 style="
                    font-size: 20px;
                    color: green;
                ">${el.price}</h4>

                <hr>

       </div> 
       `;
           });

    console.log(phones2);
    container.innerHTML = ""
    phones2.forEach((el)=>{
    console.log(el);
    container.innerHTML += `
    <img src="${el.url}">
        <h3>${el.title}</h3>
        <h4>${el.price}</h4>
        <hr>
    </div>
    `
})

}



