import { Pipe, PipeTransform } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Pipe({
  name: 'doneItems'
})
export class DoneItemsPipe implements PipeTransform {

  transform(items: Item[]): number {
    if (items) {
      return items.filter(({ progress }) => progress).length
    }

    return 0
  }

}
