import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'app/shared/pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from 'app/shared/pages/home/home.component';
import { SearchComponent } from 'app/desktop/pages/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from 'app/desktop/pages/about-us/about-us.component';
import { TermsOfUseComponent } from 'app/desktop/pages/terms-of-use/terms-of-use.component';
import { FaqComponent } from 'app/desktop/pages/faq/faq.component';
import { ReportUsComponent } from 'app/desktop/pages/report-us/report-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportUsComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'termsofuse', component: TermsOfUseComponent },
  { path: 'search/:searchedText', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  { path: 'home/:windowView', component: HomeComponent },

  { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
