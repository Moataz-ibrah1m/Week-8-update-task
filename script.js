

var productNameInput=document.getElementById('productNameInput')
var productPriceInput=document.getElementById('productPriceInput')
var productCategoryInput=document.getElementById('productCategoryInput')
var productDescInput=document.getElementById('productDescInput')

var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
indexUpdate=0;
var productContainer;
if(localStorage.getItem('list') !=null)
{
    productContainer= JSON.parse(localStorage.getItem('list'));
    displayProduct()
}


else
{
    productContainer=[];
}


function addProduct()
{
    var product=
    {
        name:productNameInput.value,
        price:productPriceInput.value,
        Category:productCategoryInput.value,
        Desc:productDescInput.value
    }
    // console.log(prdouct)
    productContainer.push(product);
    localStorage.setItem('list',JSON.stringify(productContainer));
    cleaerForm()
    
    displayProduct()
   
    
    
}
function cleaerForm()
{
   
        productNameInput.value=""
        productPriceInput.value=""
        productCategoryInput.value=""
        productDescInput.value=""
    
}

function displayProduct()
{
    
    var list=``;
    for( var i=0 ;i<productContainer.length;i++ )
    {
    list +=` <tr>
    <td>${productContainer[i].name}</td>
    <td>${productContainer[i].price}</td>
    <td>${productContainer[i].Category}</td>
    <td>${productContainer[i].Desc}</td>
   
    <td> <button class="btn btn-danger" onclick="deleteProduct(${i})" > <i class="fa-solid fa-trash-can"></i>  </button></td>
    <td><button class="btn btn-warning" onclick="getProductInfo(${i})"> <i class="fa-regular fa-pen-to-square"></i></i> </button></td>
</tr>`
}
document.getElementById('tableList').innerHTML=list ;
}



function deleteProduct(index)
{
    
    productContainer.splice(index,1)
    localStorage.setItem('product',JSON.stringify(productContainer))
    displayProduct()
}




function getProductInfo(index)
{
    indexUpdate=index;
    var currentProduct = productContainer[index];
    productNameInput.value=currentProduct.name;
    productPriceInput.value=currentProduct.price  ;     
    productCategoryInput.value=currentProduct.Category;
    productDescInput.value=currentProduct.Desc;

    updateBtn.classList.remove("d-none")
    addBtn.classList.add("d-none")
   
}
function updateProduct(){
    var product =
    {
        name: productNameInput.value,
        price: productPriceInput.value,
        Category: productCategoryInput.value,
        Desc: productDescInput.value,
    }
    console.log(indexUpdate);
    
    productContainer.splice(indexUpdate , 1,product);
    
    localStorage.setItem('list',JSON.stringify(productContainer));
    displayProduct()
    updateBtn.classList.add("d-none")
    addBtn.classList.remove("d-none")
  
}
















