import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderJournalComponent } from './order-journal.component';

describe('OrderJournalComponent', () => {
  let component: OrderJournalComponent;
  let fixture: ComponentFixture<OrderJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
