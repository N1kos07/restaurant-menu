function Cart({ cart, handleClearCart }) {
    return (
        <div>
            <h2>Cart ({cart.length})</h2>
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
}

export default Cart;