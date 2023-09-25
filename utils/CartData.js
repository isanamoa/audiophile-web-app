
const CartData = JSON.parse(localStorage.getItem('CartData')) === null ? 
    [] 
    :
    JSON.parse(localStorage.getItem('CartData'))

export default CartData;