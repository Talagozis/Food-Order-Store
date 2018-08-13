import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../environments/environment';

@Pipe({
  name: 'imageProduct'
})
export class ImageProductPipe implements PipeTransform {

  transform(value: string, ...args) {
    // if (value && /\S/.test(value)) {
    //   return environment.image_url + "product/" + value;
    // } 
    return '../assets/imgs/no-image-available-product.png';
}

}
