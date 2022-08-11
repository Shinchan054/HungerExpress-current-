let order = document.querySelectorAll('.confirm-btn');



function Order(cart_id){

    axios.post('/restaurant/home',cart_id).then(res=>{
        console.log(res);
    })
};

order.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked");
        let cart_id = JSON.parse(btn.dataset.cart_id);
        console.log(cart_id);
        Order(Number(cart_id));

    })
});