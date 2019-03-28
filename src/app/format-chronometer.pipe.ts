import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatChronometer'
})
export class FormatChronometerPipe implements PipeTransform {

  transform(value: any): string {
    value = value.toString();
    if (value.length === 1) {
      value = '0' + value;
    }
    return value;
  }

}
