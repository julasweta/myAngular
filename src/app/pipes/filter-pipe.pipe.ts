import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {


  transform(arr:any[], search: string = ''): any {
    if (search === '') {
      return arr
    }

    return arr.filter(post => {
      return post.title.toLowerCase().includes(search.toLowerCase())
    })
  }

}
