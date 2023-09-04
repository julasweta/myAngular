import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomPipe' // Назва вашого pipe для використання в шаблоні
})
export class MyCustomPipe implements PipeTransform {
  transform(value: number, pow: number = 2): any {
   let res = value*pow;
    return res ; // Поверніть оброблені дані
  }
}
