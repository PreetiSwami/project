import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mygender'
})
export class MygenderPipe implements PipeTransform {

  transform(value: string,gender:string): unknown {
    //return null;
    if(gender.toLocaleLowerCase()=="male"){
      return "Mr. "+value;
    }else{
      return "Miss "+value;
    }
  }

}
