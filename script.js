let cart=JSON.parse(localStorage.cart||"[]")

function add(name,price){
cart.push({name,price})
localStorage.cart=JSON.stringify(cart)
alert("Добавлено")
}

function loadCart(){
const ul=document.getElementById('cart')
if(!ul)return
let total=0
ul.innerHTML=''
cart.forEach((i,idx)=>{
total+=i.price
ul.innerHTML+=`<li>${i.name} ${i.price} ₽ 
<button onclick="del(${idx})">✖</button></li>`
})
document.getElementById('total').innerText='Итого: '+total+' ₽'
}

function del(i){
cart.splice(i,1)
localStorage.cart=JSON.stringify(cart)
loadCart()
}

function pay(){
if(!cart.length)return alert("Корзина пуста")
location.href="https://wa.me/79296365464"
}

function toggleMenu(){
document.getElementById('menu').classList.toggle('show')
}

function openProduct(i){
localStorage.product=JSON.stringify(products[i])
location.href='product.html'
}

window.onload=loadCart
