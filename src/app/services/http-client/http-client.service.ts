import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENV } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: "root"})
export class HttpClientService {

	constructor(private http: HttpClient) { }

	private createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
		return headers.append(ENV.API_HEADER_NAME, ENV.API_HEADER_VALUE);
		// headers.append('Origin', ENV.API_CROSS_ORIGIN_URL);
	}


	get<T>(url): Observable<T> {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.get<T>(url, {
			headers: headers
		});
	}

	post<T>(url, data): Observable<T> {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.post<T>(url, data, {
			headers: headers
		});
	}

	put<T>(url, data): Observable<T> {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.post<T>(url, data, {
			headers: headers
		});
	}

	delete<T>(url): Observable<T> {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.get<T>(url, {
			headers: headers
		});
	}

	patch<T>(url, data): Observable<T> {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.post<T>(url, data, {
			headers: headers
		});
	}

}