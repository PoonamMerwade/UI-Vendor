import { Product } from './product';

export class Vendor {
    public vendorId:number;
    public name:string;
    public city:string;
    public mobileNo:string;
    public emailId:string;
    public products:Product[];
}