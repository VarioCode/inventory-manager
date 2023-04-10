import {Component, Inject} from '@angular/core';
import { InventoryItemModel } from '../../models/inventory-item.model';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface AddNewInventoryItemData {
  title: string;
  InputLabel: string;
}

@Component({
  selector: 'app-add-new-inventory-item',
  templateUrl: './add-new-inventory-item.component.html',
  styleUrls: ['./add-new-inventory-item.component.css'],
})
export class AddNewInventoryItemComponent {
  newItem: InventoryItemModel = new InventoryItemModel();

  // Form groups
  BasicInfoFormGroup: FormGroup = this._formBuilder.group({
    Name: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required]),
  });
  IdentificationInfoFormGroup: FormGroup = this._formBuilder.group({
    SerialNumber: new FormControl('', [Validators.required]),
    Category: new FormControl('', [Validators.required]),
    Manufacturer: new FormControl('', [Validators.required]),
  });
  InventoryInfoFormGroup: FormGroup = this._formBuilder.group({
    Price: new FormControl('', [Validators.required]),
    Quantity: new FormControl('', [Validators.required]),
  });

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddNewInventoryItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddNewInventoryItemData
  ) {}

  protected readonly name = name;

  onSumbit($event: MouseEvent) {
    
  }
}
