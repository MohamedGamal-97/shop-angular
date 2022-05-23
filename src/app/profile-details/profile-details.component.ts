import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, of, switchMap, timer } from 'rxjs';
import { AccountService } from '../account/account.service';
import { IUser } from '../shared/models/user';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {

  constructor(private accountService:AccountService,private fb: FormBuilder,private router:Router) { }
  currentUser$: Observable<IUser>;
  updateUserForm: FormGroup;
  user:IUser;
  ngOnInit(): void {
    this.currentUser$=this.accountService.currentUser$;
    this.getUser();

  }
  async getUser(){
  await this.currentUser$.subscribe(user=>{
    this.user=user;
    alert(this.user);
    this.createUpdateForm();
        })
}
  createUpdateForm() {
    this.updateUserForm = this.fb.group({
      userName:[this.user.userName, [Validators.required]],
      displayName: [this.user.displayName, [Validators.required]],
      email: [this.user.email,
        [Validators.required, Validators
        .pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')],
        [this.validateEmailNotTaken()]
      ],

    });
  }

  validateEmailNotTaken(): AsyncValidatorFn {
    return control => {
      return timer(500).pipe(
        switchMap(() => {
          if (!control.value) {
            return of(null);
          }
          return this.accountService.checkEmailExists(control.value).pipe(
            map(res => {
               return res ? {emailExists: true} : null;
            })
          );
        })
      )
    }
  }
  updateUser(){
    const token = localStorage.getItem('token')
    alert("done")
    this.accountService.UpdateCurrentUser(token,this.updateUserForm.value).subscribe(
      (user:any)=>{
        alert("done"+ user)
        this.accountService.logout();
      //  this.router.navigate(['address']);
      }
    )
  }
}
