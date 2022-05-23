import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }
  logout() {
    this.accountService.logout();
  }
}
