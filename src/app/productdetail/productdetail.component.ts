import { Component, OnInit } from "@angular/core";
import { ProductService } from "./../product.service";
import { Product } from "./../models/product";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-productdetail",
  templateUrl: "./productdetail.component.html",
  styleUrls: ["./productdetail.component.css"],
})
export class ProductdetailComponent implements OnInit {
  product: Product;

  public productCode: string;

  constructor(public service: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.productCode = params.get("code");
    });

    this.service.getSpecProduct(this.productCode).subscribe((p) => {
      this.product = p;
    });
  }

  onClickRating(message: string): void {
    alert(message);
  }
}
