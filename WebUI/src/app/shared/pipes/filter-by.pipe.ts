import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {
  transform(items: any[], field: string, filterBy: string): any[] {
    if (filterBy === '*') {
      return items;
    }
    if (!items) {
      return [];
    }
    const result = items.filter(t => {
      if (t[field] === null || t[field] === undefined) {
        return false;
      } else {
        return (
          t[field].toString().toLowerCase() ===
          filterBy.toString().toLowerCase()
        );
      }
    });
    return result;
  }
}
