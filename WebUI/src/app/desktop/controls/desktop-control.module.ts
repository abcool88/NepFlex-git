import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { DesktopHeaderComponent } from 'app/desktop/controls/desktop-header/desktop-header.component';
import { DesktopFooterComponent } from 'app/desktop/controls/desktop-footer/desktop-footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultsOverlayComponent } from './search-box/search-results-overlay/search-results-overlay.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule],
    declarations: [
        DesktopHeaderComponent,
        DesktopFooterComponent,
        SearchBoxComponent,
        SearchResultsOverlayComponent

    ],
    exports: [
        DesktopHeaderComponent,
        DesktopFooterComponent
    ]
})
export class DesktopControlModule { }
