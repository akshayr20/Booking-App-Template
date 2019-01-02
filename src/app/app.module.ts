import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { COMMON_COMPONENTS } from './commonComponents';

@NgModule({
  declarations: [AppComponent, COMMON_COMPONENTS],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
