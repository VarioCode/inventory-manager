import {Component, Inject, OnInit} from '@angular/core';
import { InventoryItemModel } from '../../models/inventory-item.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { InventoryService } from '../../services/inventory.service';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TextConfirmDialogData} from "../../error/text-confirm-dialog.component";

export interface AddNewInventoryItemData {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-add-new-inventory-item',
  templateUrl: './add-new-inventory-item.component.html',
  styleUrls: ['./add-new-inventory-item.component.css'],
})
export class AddNewInventoryItemComponent {
  subtitle: string = "";

  constructor(
    public dialogRef: MatDialogRef<AddNewInventoryItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddNewInventoryItemData
  ) {}
}
