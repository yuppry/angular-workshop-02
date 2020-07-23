import { ProductListComponent } from "./product-list/product-list.component";
import { LoginComponent } from "./login/login.component";
import { ProductdetailComponent } from "./productdetail/productdetail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "list", component: ProductListComponent },
  {
    path: "list/:name",
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },
  { path: "product/:code", component: ProductdetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
