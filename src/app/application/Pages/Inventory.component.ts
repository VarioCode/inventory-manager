import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './Inventory.component.html',
  styleUrls: ['./Inventory.component.css']
})

export class InventoryComponent {
  selectedPageSize: number = 10;
  selectedPageSizeOptions: number[] = [5, 10, 25, 100];
  selectedPage: number = 1;
  totalPages: number = 1;
  totalAmountofProducts: number = 0;

  onPageChange($event: any) {
    this.selectedPage = $event.pageIndex;
  }
}
