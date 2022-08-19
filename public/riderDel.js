let orderr = document.querySelectorAll('.rconf-btn');



function Orderdel(cart_id){

    axios.post('/rider/home/delivered',{cart_id:cart_id}).then(res=>{
        console.log(res);
    })
};

orderr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked delivered");
        let cart_id = JSON.parse(btn.dataset.cart_id);
        console.log('cart id ==',cart_id);
        Orderdel(cart_id);

    })
});