let order = document.querySelectorAll('.rconfirm-btn');
let rider_id = document.querySelector('.ridd-1');


function OrderConf(cart_id,rider_id){

    axios.post('/rider/home',{cart_id:cart_id,rider_id:rider_id}).then(res=>{
        console.log(res);
    })
};

order.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked");
        let cart_id = JSON.parse(btn.dataset.cart_id);
        OrderConf(Number(cart_id),Number(rider_id.dataset.rid));

    })
});