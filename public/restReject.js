let order = document.querySelectorAll('.rcancel-btn');



function OrderRej(cart_id){

    axios.post('/restaurant/home/reject',{cart_id:cart_id}).then(res=>{
        console.log(res);
    })
};

order.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked");
        let cart_id = JSON.parse(btn.dataset.cart_id);
        console.log('cart id ==',cart_id);
        OrderRej(cart_id);

        window.location.reload();

    })
});