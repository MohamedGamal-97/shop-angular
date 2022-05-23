import { IProductReview } from "./IProductReview";
import { IProductInfo } from "./ProductInfo";

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string[];
    productType: string;
    productBrand: string;
    color:string;
    size:string;
    sale:number;
    model:string;
    averageRating:number;
    rateCount:number;
    subCategory:string;
    category:string;
    info:IProductInfo[];
    productReviews:IProductReview[];
    productFeatures:string[];
}
