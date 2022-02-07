document.body.innerHTML=`<section class="makeup-list"> </section>`;

async function getAllItems(){
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/makeup",{method:"GET"});
 const items=await data.json();
const prod =document.querySelector(".makeup-list");
prod.innerHTML="";
items.forEach((item)=>{
prod.innerHTML+=  `
<div class="makeup-container">
<div>
<img class="item-pic" src=${item.image_link} alt=${item.name}/>
</div>
<div class="details">
<h3><b>BRAND: </b>${item.brand}</h3>
<p><b>NAME: </b>${item.name}</p>
<p><b>PRICE: </b>${item.price}</p>
<p><b>PRODUCT LINK: </b>${item.product_link}</p>
<p><b>DESCRIPTION: </b>${item.description}</p>
</div>
</div>

`;
console.log(item.name, item.price);

});
}

getAllItems();

function DeleteAllItems(){
}
