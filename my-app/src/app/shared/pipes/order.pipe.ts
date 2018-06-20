import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value);
    console.log(args);
    //const commande=args[0].trim().toUpperCase().replace(' ','');

    return `${this.format(args[0])}-${value}`; //commande.substring(0,2)+'-'+value; // ? value;
  }

  private format(state:State):string{
    return state.trim().toUpperCase().replace(' ','').substring(0,2);
  }
}
