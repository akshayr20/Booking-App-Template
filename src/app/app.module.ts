import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ToursComponent } from './tours/tours.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    ToursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
