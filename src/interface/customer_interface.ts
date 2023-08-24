import { Phone } from "./phone_interface";

export interface Customer {
    id:string;
    firstname:string;
    lastname:string;
    phonenumber:number;
    email: string;
    Address: string;
    phones: Phone[]
}