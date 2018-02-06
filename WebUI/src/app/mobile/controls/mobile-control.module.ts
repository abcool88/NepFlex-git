import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { MobileHeaderComponent } from 'app/mobile/controls/mobile-header/mobile-header.component';
import { MobileFooterComponent } from 'app/mobile/controls/mobile-footer/mobile-footer.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [
        MobileHeaderComponent,
        MobileFooterComponent

    ],
    exports: [
        MobileHeaderComponent,
        MobileFooterComponent
    ]
})
export class MobileControlModule { }
