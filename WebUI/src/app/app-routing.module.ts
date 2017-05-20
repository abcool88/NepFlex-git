import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core'

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent }
    // { path: 'home', component: HomeComponent },
    // { path: '', component: HomeComponent },
    // { path: '**', redirectTo: 'pagenotfound', pathMatch: 'full' },
    // { path: 'home/home', redirectTo: 'home/home', pathMatch: 'full' },
    // { path: '', redirectTo: 'home/home', pathMatch: 'full' },
    // {path: 'home/home', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

