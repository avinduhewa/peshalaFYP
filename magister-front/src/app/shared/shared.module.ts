import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { FormValidatorComponent } from './components/form-validator/form-validator.component';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        FilterPipe,
        FormValidatorComponent,
        ModalComponent
    ],
    providers: [],
    exports: [
        FilterPipe,
        FormValidatorComponent,
        ModalComponent
    ]
})
export class SharedModule { }
