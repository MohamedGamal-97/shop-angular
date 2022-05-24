import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account/account.service';
import { IAddress } from '../shared/models/address';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent implements OnInit {

  constructor(private fb: FormBuilder,private accountService:AccountService,private router:Router) { }
  address:IAddress={
    firstName:'',
    lastName:'',
    city:'',
    street:'',
    state:'',
    zipCode:'',

  };
  addressForm: FormGroup;
  ngOnInit(): void {
    this.createAdressForm();
 this.loadAddress();
  }
  createAdressForm(){
    // alert("yes");
    this.addressForm=this.fb.group({
      firstName:[this.address.firstName,[Validators.required]],
      lastName:[this.address.lastName,[Validators.required]],
      city:[this.address.city, [Validators.required]],
      state:[this.address.state, [Validators.required]],
      street:[this.address.street, [Validators.required]],
      zipCode:[this.address.zipCode, [Validators.required]],
    })
  }
  loadAddress(){
    const token = localStorage.getItem('token')
    // alert("sadas "+token)
    this.accountService.getUserAddress(token).subscribe(
      (address)=>{
        console.log("asdsadas22",this.address);
        if(address)
         this.address=address;

    })
  }

updateAddress(){
  const token = localStorage.getItem('token')
  this.accountService.UpdateAddressUser(token,this.addressForm.value).subscribe(
    (address:IAddress)=>{
      this.router.navigate(['address']);
    }
  )
}
}
