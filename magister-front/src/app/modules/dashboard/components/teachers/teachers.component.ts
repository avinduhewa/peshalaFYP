import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../../shared/classes/form-component.class';
import { FormBuilder, Validators } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { debug } from 'util';
import { MakeDashboardPostCall } from '../../services/makeDashboardPostCall.service';
// import { UserLoginService } from '../../services/cognito/user-login';
// import { CognitoUtilService } from '../../services/cognito/cognito-util';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  sub : any;
  classInfo : any;

  constructor(
    private fb: FormBuilder,
    private confirmationForm: FormBuilder,
    private router: Router,
    private makeUserPostCalls: MakeDashboardPostCall,
    // private cognitoUtilService: CognitoUtilService,
    // private userService: UserLoginService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      console.log(params);
      this.classInfo = params
    });
  }

  scheduleCLass(classInfo) {
    console.log(classInfo);
    this.makeUserPostCalls.joinClass(classInfo.id).subscribe(res => {
      console.log(res);
    })
    
  }

}
