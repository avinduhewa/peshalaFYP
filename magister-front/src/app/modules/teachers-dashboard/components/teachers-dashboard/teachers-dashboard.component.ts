import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { NgSelectModule } from '@ng-select/ng-select';
import { MakeDashboardGetCall } from '../../services/make-class-get-calls.service';
import { CognitoUtilService } from '../../../login/services/cognito/cognito-util';
import { UserLoginService } from '../../../login/services/cognito/user-login';

@Component({
  selector: 'app-teachers-dashboard',
  templateUrl: './teachers-dashboard.component.html',
  styleUrls: ['./teachers-dashboard.component.css']
})
export class TeachersDashboardComponent implements OnInit {
  public className = ['apple', 'orange', 'pears'];
  myClasses =[];
  classes =[];

  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private makeCalls: MakeDashboardGetCall,
    private userLoginService: UserLoginService,
    private cognitoUtilService : CognitoUtilService,
  ) { }

  ngOnInit() {
      this.makeCalls.getClasses().subscribe( async (res) =>{
        console.log(res.classes);
        await this.filterClasses(res.classes);
        console.log('!!', this.classes)
        console.log('==', this.myClasses)
      })
  }

  createClass() {
    this.router.navigate(['/createClass']);
  }

  goToClass() {
    this.router.navigate(['/classInfo']);
  }

  filterClasses(classes) {
    this.userLoginService.getParameters((cognitoUser) => {
      const userId = cognitoUser.userId;

      classes.map(e=> {
        console.log('cond',e.members.indexOf(userId) > -1,e.members, userId)
        if (e.members.indexOf(userId) > -1) {
          this.myClasses.push(e);
        } else {
          this.classes.push(e);
        }
      })
    })    
  }

}
