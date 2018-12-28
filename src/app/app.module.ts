import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { COMMON_COMPONENTS } from './commonComponents';

@NgModule({
  declarations: [AppComponent, COMMON_COMPONENTS],
  entryComponents: [COMMON_COMPONENTS],
  imports: [BrowserModule, ScrollingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
