import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultValue'
})
export class DefaultValuePipe implements PipeTransform {
  transform(value, defaultValue) {
    if (!value) {
      return defaultValue;
    } else {
      return value;
    }
  }
}
