let orderrr = document.querySelectorAll('.reject-btn');
let rider1_id = document.querySelector('.ridd-1');


function OrderRej(cart_id,rider_id){

    axios.post('/rider/home/rejected',{cart_id:cart_id,rider_id:rider_id}).then(res=>{
        console.log(res);
    })
};

orderrr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log("clicked rejected");
        let cart_id = JSON.parse(btn.dataset.car_id);
        OrderRej(Number(cart_id),Number(rider1_id.dataset.rid));
        
        window.location.reload();
    })
});