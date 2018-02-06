import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './shared/pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { DesktopModule } from 'app/desktop/desktop.module';
import { MobileModule } from 'app/mobile/mobile.module';
import { SharedModule } from 'app/shared/shared.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { CoreModule } from 'app/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    RouterModule,
    MobileModule,
    DesktopModule,
    SharedModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
