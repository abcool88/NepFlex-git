import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeMobileComponent } from 'app/mobile/pages/home-mobile/home-mobile.component';
import { MobileControlModule } from 'app/mobile/controls/mobile-control.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MobileControlModule
    ],
    declarations: [
        HomeMobileComponent
    ],
    exports: [
        HomeMobileComponent
    ]
})
export class MobilePageModule { }
