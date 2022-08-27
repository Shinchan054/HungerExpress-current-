


var stripe = Stripe('pk_test_51LVZFXFKTaYTLaHVzsFlMCfzLdGNz5rMzGoGh8sHTowd7gM30kwxFY4dnTV90kLlTnoD1Uynja2dTKO9DJDaJjG100B3P7BEHW');

let card =null;
let ordertype=null;
function mountWiget()
{
const elements = stripe.elements();
let style ={
    base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
            color: '#aab7c4'
        }
    },
    invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
    }
}

card = elements.create('card', {style: style , hidePostalCode: true});
card.mount('#card-element');
}




const form = document.querySelector('.payment-form');

const payment = document.querySelector('#payment-type');

payment.addEventListener('change', (e) => {

    if (e.target.value === 'card') {
        mountWiget();
    } else {
        card.destroy();
    }
} );

form.addEventListener('submit', (e) => {
    e.preventDefault();
   console.log(e);
  let formdata = new FormData(form);
  for(let [key,val] of formdata.entries()){
        console.log(key,val);
    }
    
    if(card){
    stripe.createToken(card).then(result => {
        console.log(result.token.id);
        axios.post('/customer/cart',{ordertype:'card', token: result.token.id}).then(res=>{

            window.location.href=res.data.str;

        })

    }).catch(error => {
        console.log(error);
    }
    );
}
else{

    axios.post('/customer/cart',{ordertype:'cod',token:null}).then(res=>{
        window.location.href=res.data.str;
    }).catch(error=>{
        console.log(error);
    }
    );
}
});
