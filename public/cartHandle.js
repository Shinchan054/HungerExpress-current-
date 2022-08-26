// import axios from './../node_modules/axios/dist/axios.min.js';
// import axios from 'axios';


let addtocart = document.querySelectorAll('.cart-btn');

let rest_id = document.querySelector('.mb-1');
console.log(rest_id.dataset.rid);

let cust_id = document.querySelector('.products');
console.log(cust_id.dataset.cid);

function updateCart(item,rid, cid){
  
    axios.post('/customer/cart/update', {item:item, rid:rid , cid: cid}).then(res=>{
    console.log(res);
})
};

addtocart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked");
        
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1500);

         let item = JSON.parse(btn.dataset.item);
         console.log(item);
          updateCart(item,Number(rest_id.dataset.rid),Number(cust_id.dataset.cid));


})
});