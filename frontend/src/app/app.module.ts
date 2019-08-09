import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './common/http';
import { MaterialModule } from './libs/material/material.module';
import { BaseProgressSpinnerComponent } from './base/components/base-progress-spinner/base-progress-spinner.component';
import { BaseProgressSpinnerService } from './base/components/base-progress-spinner/base-progress-spinner.service';

@NgModule({
  declarations: [AppComponent, BaseProgressSpinnerComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [httpInterceptorProviders, BaseProgressSpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
