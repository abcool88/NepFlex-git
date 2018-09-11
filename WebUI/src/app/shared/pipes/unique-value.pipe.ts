import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueValue'
})
export class UniqueValuePipe implements PipeTransform {
  transform(object, uniqueBy) {
    if (!uniqueBy || uniqueBy.trim() === '' || !Array.isArray(object)) {
      return object;
    } else {
      const flags = {};
      const newArray = [];
      const theOrginalArray = Array.from(object);
      for (let i = 0; i < theOrginalArray.length; ++i) {
        if (!flags[theOrginalArray[i][uniqueBy]]) {
          flags[theOrginalArray[i][uniqueBy]] = true;
          newArray.push(theOrginalArray[i]);
        }
      }
      return newArray;
    }
  }
}
