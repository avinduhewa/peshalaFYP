import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { NgSelectModule } from '@ng-select/ng-select';
import { MakeDashboardGetCall } from '../../services/makeDashboardGetCall.service'
import { UserLoginService } from '../../../login/services/cognito/user-login';
import { CognitoUtilService } from '../../../login/services/cognito/cognito-util'

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']

})
export class DashboardLayoutComponent implements OnInit {

  public userName : any;


  constructor(
   private userLoginService : UserLoginService,
   private router : Router,
   private  cognitoUtilService :CognitoUtilService,
  ) { }

  ngOnInit() {
    this.userLoginService.isAuthenticated((err, res) => {
      if (res === false) {
        this.router.navigate(['/login']);
      }
    })
    this.userLoginService.getParameters((res)=>{
      switch (res.type) {
        case 'teacher':
            this.router.navigate(['/teacherdashboard']);
          break;
        case 'student':
            this.userName = res.name
          break;
      
        default:
          break;
      }

      
      
    })

  }

  logout() {
    this.userLoginService.logout()
    this.router.navigate(['/login']);
  }

}
