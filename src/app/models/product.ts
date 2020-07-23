export class Product {
  constructor(
    public imageUrl: string,
    public code: string,
    public name: string,
    public price: number,
    public available: boolean,
    public rating: number
  ) {}
}
