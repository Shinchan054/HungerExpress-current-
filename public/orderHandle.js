let order = document.querySelectorAll('.confirm-btn');



function OrderConf(cart_id){

    axios.post('/restaurant/home',{cart_id:cart_id}).then(res=>{
        console.log(res);
    })
};

order.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked");
        let cart_id = JSON.parse(btn.dataset.cart_id);
        console.log('cart id ==',cart_id);
        OrderConf(cart_id);

        window.location.reload();

    })
});