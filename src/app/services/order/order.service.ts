import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RpcService } from '../rpc/rpc.service';
import { CheckoutRpcResponse } from '../../models/Request/CheckoutRpcResponse';
import { CheckoutRpc } from '../../models/Rpc/Checkout';


@Injectable({providedIn: "root"})
export class OrderService {

	constructor(public rpc: RpcService<CheckoutRpcResponse>) { }

	public checkout(checkoutRpc: CheckoutRpc): Observable<CheckoutRpcResponse> {
		return this.rpc.post('order/checkout', checkoutRpc)
	}

}
