let addtocart = document.querySelectorAll('.Allavail-btn');

function updateAllAvail(id){

    axios.post('/restaurant/menu/Allavail', {id:id}).then(res=>{
        console.log(res);
    })
};

addtocart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(btn.dataset.id);
        let id = JSON.parse(btn.dataset.id);
        updateAllAvail(Number(id));



    })
});