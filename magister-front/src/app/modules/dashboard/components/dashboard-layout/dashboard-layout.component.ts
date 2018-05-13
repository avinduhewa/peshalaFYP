import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { NgSelectModule } from '@ng-select/ng-select';
import { MakeDashboardGetCall } from '../../services/makeDashboardGetCall.service'
import { UserLoginService } from '../../../login/services/cognito/user-login';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']

})
export class DashboardLayoutComponent implements OnInit {

  constructor(
   private userLoginService : UserLoginService,
   private router : Router,
  ) { }

  ngOnInit() {
    this.userLoginService.isAuthenticated((err, res) => {
      if (res === false) {
        this.router.navigate(['/login']);
      }
    })
  }

  logout() {
    console.log('test');
    
    this.userLoginService.logout()
  }

}
