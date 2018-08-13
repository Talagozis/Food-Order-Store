import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

@Pipe({
  name: 'imageStore'
})
export class ImageStorePipe implements PipeTransform {

  transform(value: string, ...args) {
		// if (value && /\S/.test(value)) {
		// 	return environment.image_url + "store/" + value;
		// } 
		return '../assets/imgs/no-image-available-store.png';
	}

}
