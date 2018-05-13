import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { DashoardComponent } from './dashoard/dashoard.component';
import { UserConfirmationComponent } from './components/user-confirmation/user-confirmation.component';


const LOGIN_ROUTES: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            {
                path: 'login',
                component: SignInComponent
            },
            {
                path: 'userConfirmation',
                component: UserConfirmationComponent
            },
            {
                path: 'sign-up',
                component: SignUpComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'change-password',
                component: ChangePasswordComponent
            }
        ]
    }
];


export const LoginRoutes = RouterModule.forChild(LOGIN_ROUTES);
