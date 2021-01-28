import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.products = [
      new Product('PAN MWLD(1)', 'assets/PAN MWLD(1).PNG', "1"),
      new Product('PAN MWLD(2)', 'assets/PAN MWLD(2).PNG', "2"),
      new Product('PAN MWLD(3)', 'assets/PAN MWLD(3).PNG', "3"),
      new Product('PAN MWLD(4)', 'assets/PAN MWLD(4).PNG', "4"),
      new Product('PAN SFT(1)', 'assets/PAN SFT(1).PNG', "5"),
      new Product('PAN SFT(2)', 'assets/PAN SFT(2).PNG', "6"),
      new Product('PAN SFT(3)', 'assets/PAN SFT(3).PNG', "7"),
      new Product('PAN Matador', 'assets/PAN Matador(1).PNG', "8"),
      new Product('PAN SFT Sniper', 'assets/PAN SFT SNIPER(1).PNG', "9")

    ];
  }

  // new Product('PAN MWLD', 'assets/PAN MWLD(1).PNG', "1"),
  // new Product('PAN SFT', 'assets/PAN SFT(1).PNG', "2"),
  // new Product('PAN Matador', 'assets/PAN Matador(1).PNG', "3"),
  // new Product('PAN SFT Sniper', 'assets/PAN SFT SNIPER(1).PNG', "4")

  getProducts(): Product[] {
    return this.products;
  }


  getProductById(id: string): Product {
    return this.products.find(item => item.id == id)
    } 

  delete(p: Product) {
    const index = this.products.findIndex(item => item.id == p.id);
    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
