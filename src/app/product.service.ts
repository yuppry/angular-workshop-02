import { Injectable } from "@angular/core";
import { Product } from "./models/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  p1 = new Product(
    "https://cf.shopee.co.th/file/56184359b7acccc6cdcaa05b4788565d",
    "1101",
    "Apple Watch Series 3",
    10000.0,
    true,
    2.5
  );
  p2 = new Product(
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MXMT2_VW_34FR+watch-44-titanium-light-cell-edition5s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1583262310141,1584973326103",
    "1102",
    "Apple Watch Nike",
    20000.5,
    true,
    3.5
  );
  p3 = new Product(
    "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MTPK2_VW_34FR+watch-44-alum-silver-nc-5s_VW_34FR_WF_CO?wid=750&hei=712&trim=1,0&fmt=p-jpg&qlt=80&op_usm=0.5,0.5&.v=1566419578393,1569365637670",
    "1103",
    "Apple Watch Limited",
    30300.2231,
    false,
    5
  );
  getAllProduct(): Observable<Product[]> {
    return of([this.p1, this.p2, this.p3]);
    // return this.http.get<Product[]>("http://165.22.255.58:3000/products");
  }

  getAllProductHttp(): Observable<Product[]> {
    return this.http.get<Product[]>("http://165.22.255.58:3000/products");
  }

  getSpecProduct(id: string): Observable<Product> {
    return of([this.p1, this.p2, this.p3].filter((p) => p.code === id)[0]);
  }
}
