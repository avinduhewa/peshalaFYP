import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        console.log('not implemented');
    }
}
