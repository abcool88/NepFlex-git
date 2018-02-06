import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'app/shared/shared.module';
import { MobilePageModule } from 'app/mobile/pages/mobile-page.module';
import { HomeMobileComponent } from 'app/mobile/pages/home-mobile/home-mobile.component';
import { MobileControlModule } from 'app/mobile/controls/mobile-control.module';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule,
        SharedModule,
        MobileControlModule,
        MobilePageModule
    ],
    declarations: [
    ],
    exports: [HomeMobileComponent
    ],
    providers: [
    ]
})
export class MobileModule { }
