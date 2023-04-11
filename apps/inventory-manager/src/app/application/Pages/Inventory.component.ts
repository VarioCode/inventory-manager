import {Component, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddNewInventoryItemComponent} from "../Dialogs/add-new-inventory-item.component";
import {InventoryItemModel} from "../../models/inventory-item.model";
import {ThemePalette} from "@angular/material/core";
import {InventoryService} from "../../services/inventory.service";
import {TextConfirmDialogComponent} from "../../error/text-confirm-dialog.component";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-inventory',
  templateUrl: './Inventory.component.html',
  styleUrls: ['./Inventory.component.css'],
})
export class InventoryComponent {
  isLoading: boolean = true;
  colorLoadingBar: ThemePalette = 'accent';
  displayedColumns: string[] = ['id', 'name', 'description', 'serialNumber', 'manufacturer', 'category', 'price', 'quantity'];

  @ViewChild(MatTable) table!: MatTable<InventoryItemModel>;

  // Pagination variables
  selectedPageSize: number = 10;
  selectedPageSizeOptions: number[] = [5, 10, 25, 100];
  selectedPage: number = 1;
  totalPages: number = 1;
  totalAmountofProducts: number = 0;

  // Inventory variables
  inventoryItems: InventoryItemModel[] = [];

  constructor(private dialog: MatDialog,
              private inventoryService: InventoryService,
              private errorDialog: MatDialog) {
    this.getInventory();
  }

  getInventory() {
    //TODO: Get inventory from API
    this.inventoryItems = this.inventoryService.getInventoryItems();
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
    }).afterClosed().subscribe((result: InventoryItemModel) => {
      if (result) {
        this.inventoryService.addInventoryItem(result);
        this.table.renderRows();
      } else {
        this.errorDialog.open(TextConfirmDialogComponent, {
          data: {title: "Error", message: "An error occurred while adding the inventory item."}, width: "400px"
        });
      }
    });
  }
}
