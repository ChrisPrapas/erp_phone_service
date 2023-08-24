import { Customer } from "./customer_interface";

export interface Phone {
    id:string;
    phone_model:string;
    IMEI:number;
    password: string;
    customer: Customer;
}