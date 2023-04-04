import { Component, OnInit } from '@angular/core';
import { Order } from '../order.model';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-journal',
  templateUrl: './order-journal.component.html',
  styleUrls: ['./order-journal.component.css']
})
export class OrderJournalComponent implements OnInit {

  orders!: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrder();
  }

  getAllOrder(): void {
    this.orderService.getAllOrder().subscribe(orders => this.orders = orders);
  }

  deleteOrder(id: number): void {
    const index = this.orders.findIndex(o => o.id === id);
    this.orders.splice(index, 1);
  }

  addOrder(order: Order): void {
    order.id = this.orders.length + 1;
    this.orders.push(order);
  }

  updateOrder(order: Order): void {
    const index = this.orders.findIndex(o => o.id === order.id);
    this.orders[index] = order;
  }

}