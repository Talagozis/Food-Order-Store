import { NgModule } from '@angular/core';
import { DayNameFormatPipe } from './day-name-format.pipe';
import { PriceFormatPipe } from './price-format.pipe';
import { ImageStorePipe } from './image-store.pipe';
import { ImageProductPipe } from './image-product.pipe';
import { ImageContactTypePipe } from './image-contact-type.pipe';

@NgModule({
    declarations: [DayNameFormatPipe,
        PriceFormatPipe,
        ImageStorePipe,
        ImageProductPipe,
        ImageContactTypePipe,
    ],
    imports: [],
    exports: [DayNameFormatPipe,
        PriceFormatPipe,
        ImageStorePipe,
        ImageProductPipe,
        ImageContactTypePipe,
    ]
})
export class PipesModule { }
