let order = document.querySelectorAll('.rider-btn');
function OrderCon(cart_id){
    axios.post('/restaurant/home/finish',{cart_id:cart_id}).then(res=>{
        console.log(res);
    });
};

order.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked finish");
        let cart_id = JSON.parse(btn.dataset.cart_id);
        console.log('cart id ==',cart_id);
        OrderCon(cart_id);

    });
});