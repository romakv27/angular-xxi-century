import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from './order.service';

@Component({
  selector: 'app-add-order-form',
  templateUrl: './add-order-form.component.html',
  styleUrls: ['./add-order-form.component.css']
})
export class AddOrderFormComponent implements OnInit {

  orderForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      id: ['', Validators.required],
      client: ['', Validators.required],
      orderDate: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  get formControls() {
    return this.orderForm.controls;
  }

//   onSubmit() {
//     if (this.orderForm.invalid) {
//       return;
//     }
//     const Order = {
//       id: this.formControls['id'].value,
//       client: this.formControls['client'].value,
//       orderDate: this.formControls['orderDate'].value,
//       address: this.formControls['address'].value
//     };
//     const result = this.orderService.addOrder(Order);
//     result.subscribe(
//       (response: any) => {
//         console.log(response);
//         this.orderForm.reset();
//       },
//       (error: any) => console.error(error)
//     );
//   }

}
