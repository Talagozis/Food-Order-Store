import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

import { StoreApi } from '../../models/api/Store';
import { ApiService } from '../api/api.service';

type SubscriptionDelegate = (value: StoreApi[]) => void;

@Injectable({providedIn: "root"})
export class StoreService {

	constructor(public api: ApiService<StoreApi>) { }

	public findAllAvailable(subscription: SubscriptionDelegate): Subscription {

		subscription = StoreSubscriptionFilters.filterOpen(subscription);
		subscription = StoreSubscriptionFilters.filterActive(subscription);
		subscription = StoreSubscriptionFilters.filterCanOrderOnline(subscription);
		subscription = StoreSubscriptionFilters.filterHasDeliveryOrTakeaway(subscription);
		subscription = StoreSubscriptionFilters.filterSendOrderByPushOrEmail(subscription);

		return this.find().subscribe(subscription);
	}


	private find(): Observable<StoreApi[]> {
		return this.api.get('store')
	}

	public findOne(bid: number): Observable<StoreApi> {
		return this.api.getOne('store', bid)
	}

	public findBySlug(storeSlug: string): Promise<StoreApi> {
		return this.api.getOne('store', { "slug": storeSlug }).toPromise();
	}


}

class StoreSubscriptionFilters {

	public static filterOpen(subscription: SubscriptionDelegate): SubscriptionDelegate {
		return a => subscription(a.filter(b => b.isOpen));
	}

	public static filterActive(subscription: SubscriptionDelegate): SubscriptionDelegate {
		return a => subscription(a.filter(b => b.isActive));
	}

	public static filterCanOrderOnline(subscription: SubscriptionDelegate): SubscriptionDelegate {
		return a => subscription(a.filter(b => b.canOrderOnline));
	}

	public static filterHasDeliveryOrTakeaway(subscription: SubscriptionDelegate): SubscriptionDelegate {
		return a => subscription(a.filter(b => b.hasDelivery || b.hasTakeaway));
	}

	public static filterSendOrderByPushOrEmail(subscription: SubscriptionDelegate): SubscriptionDelegate {
		return a => subscription(a.filter(b => b.sendOrderByPush || b.sendOrderByEmail));
	}

}