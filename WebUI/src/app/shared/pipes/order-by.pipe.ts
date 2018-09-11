import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(object, orderBy, asc = true) {
    if (!orderBy || orderBy.trim() === '' || !Array.isArray(object)) {
      return object;
    }

    let orderByItems: string[];
    orderByItems = orderBy.split('|');
    object = this.order(object, orderByItems);
    return object;
  }
  isNullEmptyOrUndefined = item => {
    if (item === undefined || item == null || item === '') {
      return true;
    } else {
      return false;
    }
  };

  order = (object, orderByFields) => {
    return Array.from(object).sort((item1: any, item2: any) => {
      let result = 0;
      orderByFields.forEach(element => {
        if (result === 0) {
          if (
            this.isNullEmptyOrUndefined(item1[element]) ||
            this.isNullEmptyOrUndefined(item2[element])
          ) {
            if (
              this.isNullEmptyOrUndefined(item1[element]) &&
              !this.isNullEmptyOrUndefined(item2[element])
            ) {
              result = 1;
            } else if (
              !this.isNullEmptyOrUndefined(item1[element]) &&
              !this.isNullEmptyOrUndefined(item2[element])
            ) {
              result = -1;
            }
          } else if (item1[element] instanceof Date) {
            if (item1[element].getTime() < item2[element].getTime()) {
              result = -1;
            }
            if (item1[element].getTime() > item2[element].getTime()) {
              result = 1;
            }
          } else {
            if (
              item1[element].toString().toLowerCase() <
              item2[element].toString().toLowerCase()
            ) {
              result = -1;
            }
            if (
              item1[element].toString().toLowerCase() >
              item2[element].toString().toLowerCase()
            ) {
              result = 1;
            }
          }
        }
      });
      return result;
    });
  };
}
