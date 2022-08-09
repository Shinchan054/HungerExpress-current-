let addtocart = document.querySelectorAll('.availability-btn');

function updateAvail(item){

    axios.post('/restaurant/menu', item).then(res=>{
        console.log(res);
    })
};

addtocart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let item = JSON.parse(btn.dataset.item);
        updateAvail(item);



    })
});