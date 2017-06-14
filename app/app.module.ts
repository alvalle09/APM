import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductModule } from './products/product.module';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, ProductModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} ]) 
      ],
      
  declarations: [AppComponent, WelcomeComponent ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
