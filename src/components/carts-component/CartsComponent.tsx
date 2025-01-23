import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {cartService} from "../../services/api.service.ts";
import {CartItem} from "../cart-item/CartItem.tsx"

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        console.log('asd');
        if (id) {
        cartService.getCartsOfUser(id)
            .then(({carts}: ICartResponseModel)=> {
                setCarts(carts);
            });
        }
    },[id]);

    return (

        <div>
            {carts.length > 0? (
                carts.map((cart: ICart) => <CartItem key={cart.id} cart={cart}/>)
            ): (
                <p>No carts available</p>
            )}
        </div>
    );
};