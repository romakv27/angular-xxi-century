import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Goods } from './goods.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private dataService: DataService) { }
  
  private goods: Goods[] = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 200},
  ];

  getAllGoods(): Observable<Goods[]> {
    return of(this.goods);
  }

  getGoodsById(id: number): Observable<Goods> {
    const goods = this.goods.find(g => g.id === id);
    if (goods) {
        return of(goods);
      } else {
        return throwError(`Order with id ${id} not found`);
      }
  }

  addGoods(goods: Goods): void {
    goods.id = this.goods.length + 1;
    this.goods.push(goods);
  }

  updateGoods(goods: Goods): void {
    const index = this.goods.findIndex(g => g.id === goods.id);
    this.goods[index] = goods;
  }

  deleteGoods(id: number): void {
    const index = this.goods.findIndex(g => g.id === id);
    this.goods.splice(index, 1);
  }
}
function throwError(arg0: string): Observable<Goods> {
    throw new Error('Function not implemented.');
}

