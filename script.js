document.body.innerHTML=`
<div class="add-container">
<input class="Itempos" placeholder="Enter Posture">
<input class="Itembrand" placeholder="Enter Brand">
<input class="Itemname" placeholder="Enter Name">
<input class="Itemlink" placeholder="Enter Product Link">
<input class="Itemdesc" placeholder="Enter Description">
<button onclick="addAllItems()">Save</button>
</div>
<section class="makeup-list"> </section>`;

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
<p><b>PRICE: </b>$ ${item.price}</p>
<p><b>PRODUCT LINK: </b>${item.product_link}</p>
<p><b>DESCRIPTION: </b>${item.description}</p>
<button onclick="deleteAllItems(${item.id})">DELETE</button>
</div>


</div>

`;
console.log(item.name, item.price);

});
}

getAllItems();

async function deleteAllItems(item_id){
console.log(item_id)
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/makeup/"+item_id,{method:"DELETE"});
getAllItems();
}


async function addAllItems(){
const Ipos=document.querySelector(".Itempos").value;
const Ibrand=document.querySelector(".Itembrand").value;
const Iname=document.querySelector(".Itemname").value;
const Ilink=document.querySelector(".Itemlink").value;
const Idesc=document.querySelector(".Itemdesc").value;
//console.log(Ipos,Ibrand,Iname,Ilink,Idesc);
const data=await fetch("https://617062da23781c0017289a16.mockapi.io/makeup",
{method:"POST",
headers:{"Content-type":"application/json"},
body:JSON.stringify({image_link:Ipos,brand:Ibrand,name:Iname,product_link:Ilink,description:Idesc})});
getAllItems();

}

async function EditAllItems(item_id){
}