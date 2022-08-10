// const { default: axios } = require("axios");

let items = document.querySelectorAll('.plus');
let val = document.querySelector('.total');

 
console.log(val);

function updateCart(name, price){
  
      axios.post('/customer/cart/plus', {name:name, price:price}).then(res=>{
      console.log(res);
  })
  };

items.forEach((item) => {
      item.addEventListener('click', function () {
   var row = item.parentNode.parentNode;
   var name = row.children[0].innerText;
   var price = Number(row.children[1].innerHTML);
   var qty = Number(row.children[3].innerHTML);
   var total = Number(row.children[5].innerHTML);
   row.children[3].innerHTML = qty + 1;
   row.children[5].innerHTML = total + price;
   val.innerHTML = Number(val.innerHTML) + price;
    updateCart(name,price);
      });
});