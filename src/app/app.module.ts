import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductNamePipe } from "./pipe/product-name.pipe";
import { ProductFilterPipe } from "./pipe/product-filter.pipe";
import { HttpClientModule } from "@angular/common/http";
import { RatingComponent } from './rating/rating.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductNamePipe,
    ProductFilterPipe,
    RatingComponent,
    ProductdetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
