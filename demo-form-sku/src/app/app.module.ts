import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';


@NgModule({
  declarations: [
    AppComponent,
    // FormsModule,
    DemoFormSkuComponent,
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // FormsModule,
  ],
})
export class AppModule { } 
// class FormsDemoAppModule{}
