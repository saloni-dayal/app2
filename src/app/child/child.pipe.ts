import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'child'
})
export class ChildPipe implements PipeTransform {

  transform(value: string){
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }

}
