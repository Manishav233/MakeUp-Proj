

document.body.innerHTML=`
<div class="add-container">
<input class="Itempos" placeholder="Enter Posture">
<input class="Itembrand" placeholder="Enter Brand">
<input class="Itemname" placeholder="Enter Name">
<input class="Itemlink" placeholder="Enter Product Link">
<input class="Itemdesc" placeholder="Enter Description">

<a class="waves-effect waves-light btn" onclick="addAllItems()">SAVE</a>

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
<a class="waves-effect waves-light btn" onclick="deleteAllItems(${item.id})"><i class="material-icons left">delete</i>DELETE</a>
<a class="waves-effect waves-light btn" onclick="toggleEdit(${item.id})"><i class="material-icons left">edit</i>EDIT</a>


<div class="edit-makeup-${item.id}">
<input class="ItemPos-${item.id}" value="${item.image_link}  placeholder="Enter Posture">
<input class="ItemBrand-${item.id}" value="${item.brand}" placeholder="Enter Brand">
<input class="ItemName-${item.id}" value="${item.name}" placeholder="Enter Name">
<input class="ItemPrice-${item.id}" value="${item.price}" placeholder="Enter Price">
<input class="ItemLink-${item.id}" value="${item.product_link}" placeholder="Enter Product Link">
<input class="ItemDesc-${item.id}" value="${item.description}" placeholder="Enter Description">



<a class="waves-effect waves-light btn" onclick="EditAllItems(${item.id})"><i class="material-icons left">save</i>SAVE</a>
</div>



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

function toggleEdit(item_id){
    console.log("editing",item_id);
    const editUserForm=document.querySelector(`.edit-makeup-${item_id}`);
    console.log(editUserForm.style.display);
    editUserForm.style.display=
    editUserForm.style.display==="block" ? "none" : "block";
    ;
    }
    
async function EditAllItems(item_id){
    const Ipos=document.querySelector(`.ItemPos-${item_id}`).value;
    const Ibrand=document.querySelector(`.ItemBrand-${item_id}`).value;
    const Iname=document.querySelector(`.ItemName-${item_id}`).value;
    const Iprice=document.querySelector(`.ItemPrice-${item_id}`).value;
    const Ilink=document.querySelector(`.ItemLink-${item_id}`).value;
    const Idesc=document.querySelector(`.ItemDesc-${item_id}`).value;
  console.log(item_id);
    
    const data=await fetch("https://617062da23781c0017289a16.mockapi.io/makeup/"+item_id,
    {method:"PUT",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({image_link:Ipos,brand:Ibrand,name:Iname,price:Iprice,product_link:Ilink,description:Idesc})});
    getAllItems();
}