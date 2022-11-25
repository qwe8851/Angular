import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormWithBuilderComponent } from './demo-form-with-builder/demo-form-with-builder.component';
// import { DemoFormWithCalidationsExplicitComponent } from './demo-form-with-calidations-explicit/demo-form-with-calidations-explicit.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
// import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormWithBuilderComponent,
    // DemoFormWithCalidationsExplicitComponent,
    DemoFormWithValidationsExplicitComponent,
    // DemoFormWithCustomValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
