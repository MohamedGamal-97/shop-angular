export class ShopParams {
    brand:string="";
    color:string="";
    size:string="";
    typeId = 0;
    sort = 'name';
    pageNumber = 1;
    pageSize = 6;
    search?: string;
    categoryId:Number=0;
    subCategory:string|null=null;
    minPrice=1;
    sale:Number|null=null;
    maxPrice=1000000;
    star?:Number;
}
