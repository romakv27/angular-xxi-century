import { Component, OnInit } from '@angular/core';
import { Goods } from '../goods.model';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'app-goods-catalog',
  templateUrl: './goods-catalog.component.html',
  styleUrls: ['./goods-catalog.component.css']
})
export class GoodsCatalogComponent implements OnInit {

  goods!: Goods[];

  constructor(private goodsService: GoodsService) { }

  ngOnInit(): void {
    this.getAllGoods();
  }

  getAllGoods(): void {
    this.goodsService.getAllGoods().subscribe(goods => this.goods = goods);
  }

  deleteGoods(id: number): void {
    const index = this.goods.findIndex(g => g.id === id);
    this.goods.splice(index, 1);
  }

  addGoods(goods: Goods): void {
    goods.id = this.goods.length + 1;
    this.goods.push(goods);
  }

  updateGoods(goods: Goods): void {
    const index = this.goods.findIndex(g => g.id === goods.id);
    this.goods[index] = goods;
  }

}
