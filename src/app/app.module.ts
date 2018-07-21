import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './navbar/nav-item/nav-item.component';
import { NavItemExtraComponent } from './navbar/nav-item-extra/nav-item-extra.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchfrmComponent } from './categories/searchfrm/searchfrm.component';
import { AgmCoreModule } from '@agm/core';
import { GglplcsComponent } from './gglplcs/gglplcs.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {
    MatSliderModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
} from "@angular/material";
import { InfiniteScrollerDirective } from './infinite-scroller.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavItemComponent,
    NavItemExtraComponent,
    FooterComponent,
    HomeComponent,
    CategoriesComponent,
    SearchfrmComponent,
    GglplcsComponent,
    InfiniteScrollerDirective
  ],
  imports: [
      AgmCoreModule.forRoot({
          //apiKey: "AIzaSyDviOSCqGI5VGN8kP4ltqtxt930uMh5vKg",
          libraries: ["places"]
      }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
    MatGridListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
