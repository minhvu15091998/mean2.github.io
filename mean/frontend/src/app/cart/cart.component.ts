import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookModel } from '../book-model/book-model.model';
import {BookServiceService} from '../book-model/book-service.service';
import { ItemModel } from '../item-model/item-model.model'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private items: ItemModel[] = [];
  private total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
		private bookService: BookServiceService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
				var item: ItemModel = {
					book: this.bookService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: ItemModel = JSON.parse(cart[i]);
						if (item.book._id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: ItemModel = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.loadCart();
			} else {
				this.loadCart();
			}
		});
  }
  
	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
        book: item.book,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		}
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: ItemModel = JSON.parse(cart[i]);
			if (item.book._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

  

}
