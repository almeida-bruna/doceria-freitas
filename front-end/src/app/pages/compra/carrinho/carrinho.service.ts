import {Injectable} from '@angular/core'

import {Observable} from 'rxjs'
import { catchError, map } from 'rxjs/operators';

import {Product} from '../../home/home.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

    constructor(){}

    items: Product[] = []
    totl: String = "0";

    addItem(item:Product){


      if (this.items.length === 0){
        item.count = 1;
        this.items.push(item);
      } else {
        var repeat = false;
        for(var i = 0; i< this.items.length; i++){
          if(this.items[i].id === item.id){
            repeat = true;
            this.items[i].count +=1;
          }
        }
        if (!repeat) {
          item.count = 1;
           this.items.push(item);
        }
      }

        console.log(item);


        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }

    removeItem(Product){
        this.items.splice(this.items.indexOf(Product), 1)
        //salva na sessão
        sessionStorage.setItem("cart",JSON.stringify(this.items))
    }


    total() {

      var total = 0;
      for(var i = 0; i < this.items.length; i++){
          var p = this.items[i];
          total += (parseFloat(p.price) * p.count);
      }

      if (total === 0 ) {
        total = 0
        return total
      }else {
        return total + 10;
      }

    }
}
