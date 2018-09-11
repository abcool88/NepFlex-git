import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByNested'
})
export class OrderByNestedPipe implements PipeTransform {
  transform(object, orderBy, reverseFirstField = false) {
    if (!orderBy || orderBy.trim() === '' || !Array.isArray(object)) {
      return object;
    }
    let orderByItems: string[];
    orderByItems = orderBy.split('|');
    object = this.order(object, orderByItems, reverseFirstField);

    const g1 = Array.from(object);
    let blah = 0;
    g1.forEach(element1 => {
      if (Array.isArray(element1[0])) {
        const g2 = Array.from(g1);
        g2.forEach(element2 => {
          // console.log(blah + ':' + element2[0]);
          blah++;
        });
      } else {
        // console.log(blah + ':' + element1[0]);
        blah++;
      }
    });
    return object;
  }

  isNullEmptyOrUndefined = item => {
    if (item === undefined || item == null || item === '') {
      return true;
    } else {
      return false;
    }
  };
  order = (object, orderByFields, reverseFirstField) => {
    return Array.from(object).sort((item1: any, item2: any) => {
      let result = 0;
      let affirmative: number;
      let negative: number;
      let index = 0;
      orderByFields.forEach(element => {
        affirmative = reverseFirstField && index === 0 ? -1 : 1;
        negative = reverseFirstField && index === 0 ? 1 : -1;
        index = 1;
        if (result === 0) {
          if (
            this.isNullEmptyOrUndefined(item1[0][element]) ||
            this.isNullEmptyOrUndefined(item2[0][element])
          ) {
            if (
              this.isNullEmptyOrUndefined(item1[0][element]) &&
              !this.isNullEmptyOrUndefined(item2[0][element])
            ) {
              result = affirmative;
            } else if (
              !this.isNullEmptyOrUndefined(item1[0][element]) &&
              !this.isNullEmptyOrUndefined(item2[0][element])
            ) {
              result = negative;
            } else {
              result = affirmative;
            }
          } else if (item1[element] instanceof Date) {
            if (item1[0][element].getTime() < item2[0][element].getTime()) {
              result = negative;
            }
            if (item1[0][element].getTime() > item2[0][element].getTime()) {
              result = affirmative;
            }
          } else {
            if (
              item1[0][element].toString().toLowerCase() <
              item2[0][element].toString().toLowerCase()
            ) {
              result = negative;
            }
            if (
              item1[0][element].toString().toLowerCase() >
              item2[0][element].toString().toLowerCase()
            ) {
              result = affirmative;
            }
          }
        }
      });
      return result;
    });
  };
}
