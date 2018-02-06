import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeDesktopComponent } from 'app/desktop/pages/home-desktop/home-desktop.component';
import { DesktopControlModule } from 'app/desktop/controls/desktop-control.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        DesktopControlModule,
        SharedModule
    ],
    declarations: [
        HomeDesktopComponent
    ],
    exports: [HomeDesktopComponent]
})
export class DesktopPageModule { }
