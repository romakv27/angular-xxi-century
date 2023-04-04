import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Goods } from './goods.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ordersUrl = 'http://example.com/api/orders';
  private goodsUrl = 'http://example.com/api/goods';

  constructor(private http: HttpClient) { }


  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersUrl);
  }


  getAllGoods(): Observable<Goods[]> {
    return this.http.get<Goods[]>(this.goodsUrl);
  }


  addOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order);
  }


  updateOrder(order: Order): Observable<Order> {
    const url = `${this.ordersUrl}/${order.id}`;
    return this.http.put<Order>(url, order);
  }


  deleteOrder(order: Order): Observable<Order> {
    const url = `${this.ordersUrl}/${order.id}`;
    return this.http.delete<Order>(url);
  }


  addGoods(goods: Goods): Observable<Goods> {
    return this.http.post<Goods>(this.goodsUrl, goods);
  }


  updateGoods(goods: Goods): Observable<Goods> {
    const url = `${this.goodsUrl}/${goods.id}`;
    return this.http.put<Goods>(url, goods);
  }


  deleteGoods(goods: Goods): Observable<Goods> {
    const url = `${this.goodsUrl}/${goods.id}`;
    return this.http.delete<Goods>(url);
  }
}
