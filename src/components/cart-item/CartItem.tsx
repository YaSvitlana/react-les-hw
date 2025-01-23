import {ICart} from "../../models/ICart.ts";

export const CartItem = ({cart}: { cart: ICart }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>Cart ID: {cart.id}</h3>
            <p>Total: {cart.total}</p>
            <p>Products Count: {cart.totalProducts}</p>
            <p>Quantity: {cart.totalQuantity}</p>
        </div>
    );
};
