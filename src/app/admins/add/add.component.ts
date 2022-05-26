import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../shared/models/product';
import { ShopService } from '../../shop/shop.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent   {
  productImages=["",""];
  imageString:string="";
  imageObj:object[]=[]
  obj:object;
  features=["",""];
  featureString:string="";
  featureObj:object[]=[]
  featureobject:object;
  AddProductForm :FormGroup;
  product : IProduct


  constructor(private shopservice: ShopService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.createAddForm();
  }

  createAddForm() {
    this.AddProductForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Description: new FormControl('', Validators.required),
      Price: new FormControl('', Validators.required),
      productImages: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      productBrandId: new FormControl('', Validators.required),
      category_Id: new FormControl('', Validators.required),
      color_Id: new FormControl('', Validators.required),
      customerBuy: new FormControl('', Validators.required),
      size_Id: new FormControl('', Validators.required),
      productFeatures : new FormControl('', Validators.required),
      subCategory_Id : new FormControl('', Validators.required)

    })
  }


  onSubmit() {
this.imageString=this.AddProductForm.controls.productImages.value;
this.productImages=this.imageString.split(",");
this.productImages.forEach(element => {
 this.obj={pictureUrl:element};
 this.imageObj.push(this.obj);
})

 this.featureString=this.AddProductForm.controls.productFeatures.value;
this.features=this.imageString.split(",");
this.features.forEach(element => {
 this.featureobject={feature:element};
 this.featureObj.push(this.obj);
  
});
console.log(this.imageObj);

    this.shopservice.PostProduct({ "Name": this.AddProductForm.controls.Name.value, 
    "Description": this.AddProductForm.controls.Description.value, 
    "Price": parseInt(this.AddProductForm.controls.Price.value), "ProductImages": this.imageObj, 
    "ProductBrandId": parseInt(this.AddProductForm.controls.productBrandId.value), 
    "Date": new Date(), 
     "SubCategory_Id": parseInt(this.AddProductForm.controls.subCategory_Id.value), 
    //  "category_Id": parseInt(this.AddProductForm.controls.category_Id.value),
      "Color_Id": parseInt(this.AddProductForm.controls.color_Id.value) , 
     "Size_Id": parseInt(this.AddProductForm.controls.size_Id.value) ,
      "productFeatures": this.featureObj } ), error => {
      console.log(error);
    }
  }

}

