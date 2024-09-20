export interface Product {
    id: number;
    name: string;
    recordDate: Date;
    expirationDate: Date;
    forWho: string;
    case: string;
    whichDoctor: string;
    photo: string;
    onPrecription: boolean;
}

export type ProductList = Product[];