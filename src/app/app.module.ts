import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductComponent } from '../product/product.component';
import { RatingComponent } from '../rating/rating.component';
import { ProductService } from '../product/product.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
