let carts = document.querySelectorAll('.add-cart');
let products = [
{
name:'RYZEN',
tag:'PC1',
price:2000,
inCart:0
},
{
    name:'PC  ',
    tag:'PC2',
    price:3000,
    inCart:0
    },
    {
        name:'PC',
        tag:'PC3',
        price:5000,
        inCart:0
        },
        {
            name:'PC Gamer',
            tag:'PC4',
            price:7000,
            inCart:0
            },
            {
                name:'PC Gamer5',
                tag:'PC5',
                price:7000,
                inCart:0
                },
                {
                    name:'PC Gamer6',
                    tag:'PC6',
                    price:7000,
                    inCart:0
                    },
                    {
                        name:'PC Gamer7',
                        tag:'PC7',
                        price:7000,
                        inCart:0
                        },
];




for(let i=0;i<carts.length;i++)
{
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function OnLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.carte span').textContent= productNumbers ;

    }
}
function cartNumbers(products){
console.log("The product clicked is",products)
let productNumbers = localStorage.getItem('cartNumbers');

productNumbers= parseInt(productNumbers);
if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers+1); 
    document.querySelector('.carte span').textContent= productNumbers + 1;
}else{
    localStorage.setItem('cartNumbers',1); 
    document.querySelector('.carte span').textContent= 1;
}
setItem(products)
  }
function setItem(products){
let CartItems=localStorage.getItem('productsInCart');
CartItems=JSON.parse(CartItems);
if(CartItems != null)
{
if(CartItems[products.tag] == undefined ){
CartItems={
... CartItems,
[products.tag]:products

}
}


   CartItems[products.tag].inCart+=1;
}else{
    products.inCart =1;
 CartItems={
    [products.tag]: products
}

}
localStorage.setItem("productsInCart",JSON.stringify(CartItems));
}
function totalCost(products){
   // console.log("the products price is",products.price)
let  cartCost = localStorage.getItem('totalCost');
console.log("My cartCost is",cartCost);
console.log(typeof cartCost);
if(cartCost != null){
cartCost = parseInt(cartCost);
localStorage.setItem("totalCost", cartCost +products.price);}
else{
    localStorage.setItem("totalCost",products.price);
}}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    let  cartCost = localStorage.getItem('totalCost');
    cartItems=JSON.parse(cartItems);
    let productsContainer = document.querySelector(".products-container");
    console.log(cartItems);
    if(cartItems && productsContainer){
        products.innerHTML = '';
        Object.values(cartItems).map(item=>{
            productsContainer.innerHTML += `
           
            <div class="products">
            <ion-icon name="close-circle"></ion-icon>
            <img src="./res/${item.tag}.png">
            <span>${item.name}</span>
            </div>
            <div class="price">${item.price} DT</div>
            <div class="quantity">
            <ion-icon name="arrow-back-circle"></ion-icon>
           <span>${item.inCart}</span>
           <ion-icon name="arrow-forward-circle"></ion-icon>
            </div>
            <div class="total">
            ${item.inCart * item.price} DT</div>
            `;
        });
productsContainer.innerHTML += `
<div class="basketTotalcontainer">
<h4 class="basketTotalTitle">

</h4>
<h4 class="basketTotal">
${cartCost}DT
</h4>

`;

    }
}
function show_confirmation()
{
var r=confirm("your order is confirmed");
if (r==true)
{
    alert("THANK YOUUUUU !!!");
}


}












OnLoadCartNumbers();
displayCart();







