import { Injectable } from '@angular/core';
import { ProductApi } from '../../../models/api/Product';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

type SubscriptionDelegate = (value: ProductApi[]) => void;

@Injectable({providedIn: "root"})
export class ProductService {

	constructor(public api: ApiService<ProductApi>) { }

	public findAllAvailable(subscription: SubscriptionDelegate): Subscription {

		subscription = ProductSubscriptionFilters.filterActive(subscription);

		return this.find().subscribe(subscription);
	}


	private find(): Observable<ProductApi[]> {
		return this.api.get('product')
	}

	public findOne(bid: number): Observable<ProductApi> {
		return this.api.getOne('product', bid)
	}

	public findByStoreBid(storeBid: number): Observable<ProductApi[]> {
		return this.api.get('product', { "storeBid": storeBid })
	}

}

class ProductSubscriptionFilters {

	public static filterActive(subscription: SubscriptionDelegate): SubscriptionDelegate {
		return a => subscription(a.filter(b => b.isActive));
	}

}