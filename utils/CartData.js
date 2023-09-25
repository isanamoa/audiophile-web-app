
let CartData = [];
    //JSON.parse(localStorage.getItem('CartData')) === null ? 
    //[] 
    //:

if (typeof window !== 'undefined')
    CartData = JSON.parse(localStorage.getItem('CartData')) === null ? 
            [] 
            :JSON.parse(localStorage.getItem('CartData'));

export default CartData;