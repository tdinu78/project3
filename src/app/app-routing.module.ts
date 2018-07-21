import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CategoriesComponent } from "./categories/categories.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes =[

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'category/:name', component: CategoriesComponent },
    { path: 'home', component: HomeComponent },
    
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}