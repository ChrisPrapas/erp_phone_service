import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PhonesComponent } from './phones/phones.component';
import { HomeMenuComponent } from './home-menu/home-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    HomeMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
