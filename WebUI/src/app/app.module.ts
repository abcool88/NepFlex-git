import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

// Routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      RouterModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
