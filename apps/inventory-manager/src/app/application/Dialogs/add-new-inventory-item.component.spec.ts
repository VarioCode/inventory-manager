import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddNewInventoryItemComponent } from './add-new-inventory-item.component';

describe('TextConfirmDialogComponent', () => {
  let component: AddNewInventoryItemComponent;
  let fixture: ComponentFixture<AddNewInventoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddNewInventoryItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewInventoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
