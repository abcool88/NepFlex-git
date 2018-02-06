import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from 'app/shared/pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from 'app/shared/pages/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home/:windowView', component: HomeComponent },

    { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AppRoutingModule { }
