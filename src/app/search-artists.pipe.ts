import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(item => {
      return item['name'].toLowerCase().includes(pipeModifier.toLowerCase());
    })
  }
}
