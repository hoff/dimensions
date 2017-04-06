import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalToPercent'
})
export class DecimalToPercentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return Math.round(value * 100)
  }

}
