import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AnimalsComponent } from './animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
