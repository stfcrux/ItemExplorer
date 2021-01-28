import { Component, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild('searchBar', {static: false}) searchBar: IonSearchbar;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();

  }



  search(event) {
    const text = event.target.value;
    const allProducts = this.productService.getProducts();
   
    if (text && text.trim() !== '') {
    this.products = allProducts.filter(
    item => item.name.toLowerCase().includes(text.toLowerCase()));
    } else {
    // Blank text, clear the search, show all products
    this.products = allProducts;
    }
    }


    refresh(event) {
      this.searchBar.value = '';
      event.target.complete();
      }
}
