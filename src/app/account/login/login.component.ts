import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent   {
  mail="";
password="";
  returnUrl: string;
  loginform :FormGroup;


  constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   
    //this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/shop';
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginform = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.required]),
      password: new FormControl('', Validators.required),
    })
  }


  onSubmit() {

    this.accountService.login({Email:this.loginform.value.email, Password :this.loginform.value.password}).subscribe(() => {
      // this.router.navigateByUrl(this.returnUrl);
      console.log("user signed in");
    }, error => {
      console.log(error);
    })
  }

}
