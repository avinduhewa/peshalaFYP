import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { NgSelectModule } from '@ng-select/ng-select';
import { MakeDashboardGetCall } from '../../services/makeDashboardGetCall.service';
import { CognitoUtilService } from '../../../login/services/cognito/cognito-util'
import { UserLoginService } from '../../../login/services/cognito/user-login';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends FormComponent implements OnInit {

  public classNamex = [];
  public user : any;
  public classInfo : any;

  myClasses =[];
  classes =[];


  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private makeCalls: MakeDashboardGetCall,
    private userLoginService: UserLoginService,
    private cognitoUtilService : CognitoUtilService,
  ) {
    super();
    this.formSubmitAttempt = false;
    this.initForm();
  }

  ngOnInit() {
    // this.userLoginService.isAuthenticated((err, res) => {
    //   console.log(res);
      
    //   if (res === false) {
    //     this.router.navigate(['/login']);
    //   }
    // })
    this.userLoginService.getParameters((res)=>{
      console.log(res.userId);
      
      this.makeCalls.getClasses().subscribe( async (res) =>{
        console.log(res.classes);
        this.classInfo = res.classes
        for (let value of res.classes){
          
          this.classNamex.push({'id': value._id, 'name': value.name});
        }

        await this.filterClasses(res.classes);
        console.log('!!', this.classes)
        console.log('==', this.myClasses)
        console.log(this.classNamex);

        
      })
    })
  }

  submit() {
    super.submit();
    if (this.form.valid) {
      const formValue = this.form.value; 
      console.log(formValue)
    }
  }

  initForm() {
    this.form = this.fb.group({
      className: [''], // TODO: allow only letters and spaces
    });
  }

  goToClass(classItem) {
    this.router.navigate(['/teachers'], { queryParams: { 
      id : classItem._id,
      name : classItem.name,
      time : classItem.time,
      type : classItem.type,
      description : classItem.description,
      date : classItem.date,
      monthlyFee : classItem.monthlyFee
      
    } });
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

