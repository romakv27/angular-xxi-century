import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';

NgModule({
  imports: [
    TabViewModule,
  ]
})

export interface Goods {
    id: number;
    name: string;
    price: number;
}
  