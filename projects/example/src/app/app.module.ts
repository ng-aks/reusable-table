import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAksTableLibModule } from 'projects/ng-aks-table-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAksTableLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
