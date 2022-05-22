import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/account.service';
import { IAddress } from '../shared/models/address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  constructor(private accountService:AccountService,private router:Router) { }
  address:IAddress;
  ngOnInit(): void {
    const token = localStorage.getItem('token')
    this.accountService.getUserAddress(token).subscribe(
      (address)=>{
        console.log("asdsadas",address);
      this.address=address;
    })
  }

}
