import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HubUserApi } from '../../../models/api/HubUser';
import { ApiService } from '../api/api.service';


@Injectable({ providedIn: 'root' })
export class HubUserService {

	constructor(public api: ApiService<HubUserApi>) { }

	public find(): Observable<HubUserApi[]> {
		return this.api.get('hubUser')
	}

}