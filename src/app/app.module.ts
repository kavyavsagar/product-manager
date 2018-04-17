import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { HomeComponent, DeleteDialog } from './home/home.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteDialog,    
    ProductComponent
  ],
  entryComponents: [HomeComponent, DeleteDialog],
  imports: [
    BrowserModule,
    HttpModule,    
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
    	{path: "", component: HomeComponent},
      {path: "product", component: ProductComponent},
      {path: "product/:id", component: ProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
