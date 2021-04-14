import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'toPound'
})
export class ToPound implements PipeTransform {
  transform(value: number): string {
    if (value < 0) {
      return 'Improper Format';
    }
    if (value < 1) {
      value = value * 100;
      return value + 'p';
    }
    return  '£ ' + value;
  }
}
