import {useEffect} from "react";
import {getCars} from "../services/api.service.ts";

export const CarsPage = () => {

    useEffect(() => {
        getCars().then( () => {
            console.log('CarsPage');
        })

    }, []);
    return (
        <>cars page</>
    );
};