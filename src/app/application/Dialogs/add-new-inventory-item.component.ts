import { Component } from '@angular/core';
import {InventoryItemModel} from "../../models/inventory-item.model";

@Component({
  selector: 'app-add-new-inventory-item',
  templateUrl: './add-new-inventory-item.component.html',
  styleUrls: ['./add-new-inventory-item.component.css']
})
export class AddNewInventoryItemComponent {
  data: InventoryItemModel;

}
