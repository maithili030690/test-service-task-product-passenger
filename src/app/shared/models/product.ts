export interface Iproducts{
    pname: string;
    pdetails: string;
    pid: string;
    pstatus: any;
}

export enum Pstatus{
    InProgress="InProgress",
    Dispatched ="Dispatched",
    Delivered ="Delivered"
}