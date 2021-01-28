import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../shared/models/product';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {
  productId: string;
  product: Product;
  productImage: string;

  constructor(private route: ActivatedRoute , private router: Router , private productService: ProductService) {

    this.productId = this.route.snapshot.params.id; 
    this.product = this.productService.getProductById(this.productId);
    this.productImage = this.product.image; 
   }

  ngOnInit() {

    
  }

  update() {
    this.router.navigate(['tabs/tab2']); 
  }

}
