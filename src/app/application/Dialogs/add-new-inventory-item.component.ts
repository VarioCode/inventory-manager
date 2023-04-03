import {Component, OnInit} from '@angular/core';
import {InventoryItemModel} from "../../models/inventory-item.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {InventoryService} from "../../services/inventory.service";

@Component({
  selector: 'app-add-new-inventory-item',
  templateUrl: './add-new-inventory-item.component.html',
  styleUrls: ['./add-new-inventory-item.component.css']
})
export class AddNewInventoryItemComponent {
  subtitle: string = "Add new inventory item";



}
