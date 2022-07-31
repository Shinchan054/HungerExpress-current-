// import axios from './../node_modules/axios/dist/axios.min.js';
// import axios from 'axios';


let addtocart = document.querySelectorAll('.cart-btn');

function updateCart(item){
  
    axios.post('/customer/cart/update', item).then(res=>{
    console.log(res);
})
};

addtocart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked");
         let item = JSON.parse(btn.dataset.item);
          updateCart(item);
        //  let sent = {
        //         item: item.name,
        //         price: item.price,
        //         description : item.description,
        //  }
         //console.log(sent);
        //updateCart(btn.dataset.item);

})
});