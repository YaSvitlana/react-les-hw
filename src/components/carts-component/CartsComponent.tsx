import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {ICart} from "../../models/ICart.ts";
import {ICartResponseModel} from "../../models/ICartResponseModel.ts";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/carts/user' +id)
            .then(res => res.json())
            .then(({carts}:ICartResponseModel)=> {
                setCarts(carts);
            });
    },[]);

    return (
        <div>
            {
                carts.map((cart:ICart) => (<div>
                        {cart.total}
                </div>))
            }
        </div>
    );
};