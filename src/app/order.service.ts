import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Order } from './order.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private dataService: DataService) { }

  private orders: Order[] = [
    {id: 1, client: 'Client', orderDate: new Date(), address: 'Address'},
    {id: 2, client: 'Client 2', orderDate: new Date(), address: 'Address'},
  ];

  getAllOrder(): Observable<Order[]> {
    return of(this.orders);
  }

  getOrderById(id: number): Observable<Order> {
    const order = this.orders.find(o => o.id === id);
    if (order) {
      return of(order);
    } else {
      return throwError(`Order with id ${id} not found`);
    }
  }

  addOrder(order: Order): void {
    order.id = this.orders.length + 1;
    this.orders.push(order);
  }

  updateOrder(order: Order): void {
    const index = this.orders.findIndex(o => o.id === order.id);
    this.orders[index] = order;
  }

  deleteOrder(id: number): void {
    const index = this.orders.findIndex(o => o.id === id);
    this.orders.splice(index, 1);
  }
}
function throwError(arg0: string): Observable<Order> {
    throw new Error('Function not implemented.');
}

