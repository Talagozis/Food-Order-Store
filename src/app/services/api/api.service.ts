import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ENV } from '../../../environments/environment';
import { HttpClientService } from '../http-client/http-client.service';


@Injectable({providedIn: "root"})
export class ApiService<T> {
	private url: string = ENV.API_URL;

	constructor(public http: HttpClientService) {
	}

	get(endpoint: string, parameters?: object): Observable<T[]> {
		var x: string = "";
		if (parameters)
			x = "?" + Object.entries(parameters).map(([key, val]) => key + "=" + encodeURIComponent(val)).join('&');

		return this.http.get<T[]>(this.url + endpoint + x);
	}

	getOne(endpoint: string, parameters: object): Observable<T>;
	getOne(endpoint: string, bid: number): Observable<T>;
	getOne(endpoint: string, bidOrParameters: number | object): Observable<T> {
		if(typeof bidOrParameters == "number") {
			return this.http.get<T>(this.url + endpoint + '/' + bidOrParameters);
		} else if(typeof bidOrParameters == "object") {
			var x: string = "?" + Object.entries(bidOrParameters).map(([key, val]) => key + "=" + encodeURIComponent(val)).join('&');	
			return this.http.get<T>(this.url + endpoint + x);
		}

	}


	// post(endpoint: string, body: any) {
	// 	return this.http.post<T>(this.url + '/' + endpoint, body);
	// }

	// put(endpoint: string, body: any, reqOpts?: any) {
	// 	return this.http.put(this.url + '/' + endpoint, body);
	// }

	// delete(endpoint: string, reqOpts?: any) {
	// 	return this.http.delete(this.url + '/' + endpoint);
	// }

	// patch(endpoint: string, body: any, reqOpts?: any) {
	// 	return this.http.patch(this.url + '/' + endpoint, body);
	// }

}
