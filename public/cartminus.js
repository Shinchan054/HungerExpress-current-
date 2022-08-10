// const { default: axios } = require("axios");

let items = document.querySelectorAll('.minus');
let val = document.querySelector('.total');

console.log(val);

function updateCart(name, price, qty){
  
      axios.post('/customer/cart/minus', {name:name, price:price}).then(res=>{
      console.log(res);
      location.reload();
  })
  };

items.forEach((item) => {
      item.addEventListener('click', function () {
   var row = item.parentNode.parentNode;
   var name = row.children[0].innerText;
   var price = Number(row.children[1].innerHTML);
   var qty = Number(row.children[3].innerHTML);
   var total = Number(row.children[5].innerHTML);
   row.children[3].innerHTML = qty - 1;
   row.children[5].innerHTML = total - price;
   val.innerHTML = Number(val.innerHTML) - price;
   if(qty - 1 == 0){
    row.remove();
   }
   updateCart(name,price);
      });
   
});