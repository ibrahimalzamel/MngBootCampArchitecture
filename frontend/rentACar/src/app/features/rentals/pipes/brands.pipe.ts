import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brands'
})
export class BrandsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
