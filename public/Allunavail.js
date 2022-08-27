let addtocart = document.querySelectorAll('.Allunavail-btn');

function updateAllunAvail(id){

    axios.post('/restaurant/menu/Allunavail', {id:id}).then(res=>{
        console.log(res);
    })
};

addtocart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(btn.dataset.id);
        let id = JSON.parse(btn.dataset.id);
        updateAllunAvail(Number(id));

    })
});