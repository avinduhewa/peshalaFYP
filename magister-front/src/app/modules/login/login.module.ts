import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginRoutes } from './login.routing';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FeatureSliderComponent } from './components/feature-slider/feature-slider.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//cognito calls
import { CognitoUtilService } from './services/cognito/cognito-util';
import { UserLoginService } from './services/cognito/user-login';
import { UtilityService } from './services/api/utility.service';

//normal calls 
import { MakeUserGetCalls } from './services/makeUserGetCalls';
import { MakeUserPostCalls } from './services/makeUserPostCalls';
import { DashoardComponent } from './dashoard/dashoard.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        FeatureSliderComponent,
        ChangePasswordComponent,
        LoginLayoutComponent,
        DashoardComponent
    ],
    imports: [
        NgSelectModule,
        BrowserModule,
        LoginRoutes,
        SharedModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        CognitoUtilService,
        UserLoginService,
        UtilityService,
        MakeUserGetCalls,
        MakeUserPostCalls,
    ]
})
export class LoginModule { }
