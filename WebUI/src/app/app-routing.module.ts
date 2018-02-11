import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'app/shared/pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from 'app/shared/pages/home/home.component';
import { SearchComponent } from 'app/desktop/pages/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'search/:searchedText', component: SearchComponent },
    { path: 'search', component: SearchComponent },
    { path: 'home/:windowView', component: HomeComponent },

    { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AppRoutingModule { }
