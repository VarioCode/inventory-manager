import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddNewInventoryItemComponent} from "../Dialogs/add-new-inventory-item.component";
import {InventoryItemModel} from "../../models/inventory-item.model";
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-inventory',
  templateUrl: './Inventory.component.html',
  styleUrls: ['./Inventory.component.css'],
})
export class InventoryComponent {
  isLoading: boolean = true;
  colorLoadingBar: ThemePalette = 'accent';

  selectedPageSize: number = 10;
  selectedPageSizeOptions: number[] = [5, 10, 25, 100];
  selectedPage: number = 1;
  totalPages: number = 1;
  totalAmountofProducts: number = 0;

  constructor(private dialog: MatDialog) {
    this.getInventory();
  }

  getInventory() {
    //TODO: Get inventory from API

    // Simulated loading
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 10000);
    this.isLoading = false;
  }

  onPageChange($event: any) {
    this.selectedPage = $event.pageIndex;
  }

  protected readonly onscroll = onscroll;

  onScroll($event: Event) {
  }

  onFabClick() {
    this.dialog.open(AddNewInventoryItemComponent, {
      data: {subtitle: "Add new inventory item"},
    })
  }
}
