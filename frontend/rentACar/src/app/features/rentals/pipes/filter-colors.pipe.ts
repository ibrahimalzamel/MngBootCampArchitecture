import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/colorModels/color';

@Pipe({
  name: 'filterColors'
})
export class FilterColorsPipe implements PipeTransform {

  transform(value: Color[],  filterText: string):Color[] {
    return value.filter((b: Color) =>
      b.name.toLocaleLowerCase().
      includes(filterText.toLocaleLowerCase())
    );
  }

}
