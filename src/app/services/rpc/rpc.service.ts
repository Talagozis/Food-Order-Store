import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from '../http-client/http-client.service';
import { ENV } from '../../../environments/environment';
import { RpcResponse } from '../../models/Request/ResponseRpc';

@Injectable({providedIn: "root"})
export class RpcService<T extends RpcResponse> {
	private url: string = ENV.RPC_URL;

	constructor(public http: HttpClientService) {
	}

	post(endpoint: string, parameters: object): Observable<T> {
		return this.http.post<T>(this.url + endpoint, parameters);
	}

}
