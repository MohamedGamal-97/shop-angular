import {v4 as uuidv4} from 'uuid';

export interface IFavourite {
    id: string;
    items: IFavouriteItem[];
}

export interface IFavouriteItem {
    id: number;
    name: string;
    price: number;
    pictureUrl: string;
    brand: string;
    description:string;
    Sale:Number;
    subCategory:string
}

export class Favourite implements IFavourite {
    id = uuidv4();
    items: IFavouriteItem[] = [];
}

