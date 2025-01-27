import axios from "axios";
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1',
    headers: {'Content-Type': "application/json"}
});
export const getCars = async (): Promise<ICar[]> => {
   const axiosResponse = await axiosInstance.get<ICar[]>("/cars");
   console.log(axiosResponse);
   const cars = axiosResponse.data;
   console.log(cars);
   return cars;
}