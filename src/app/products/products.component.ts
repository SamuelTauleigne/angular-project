import { Component, OnInit } from '@angular/core';
import productsJson from '../../assets/products.json';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selection: Product | undefined = undefined;
  dialog: boolean = false;

  constructor() {
    this.products = productsJson;
  }

  ngOnInit(): void {
  }

  formatPrice(price: number) {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
  }

  openDialog(product: Product) {
    this.selection = product;
    this.dialog = true;
  }
}
