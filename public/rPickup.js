let orderrrr = document.querySelectorAll('.rpickup-btn');



function OrderPick(cart_id){

    axios.post('/rider/home/Picked',{cart_id:cart_id}).then(res=>{
        console.log(res);
    })
};

orderrrr.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        let cart_id = JSON.parse(btn.dataset.cart_id);
        console.log('cart id ==',cart_id);
        OrderPick(cart_id);

    })
});