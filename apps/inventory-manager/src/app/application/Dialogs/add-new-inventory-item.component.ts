import {Component, Inject, OnInit} from '@angular/core';
import { InventoryItemModel } from '../../models/inventory-item.model';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {InventoryService} from "../../services/inventory.service";
import {map, Observable, startWith} from "rxjs";

export interface AddNewInventoryItemData {
  title: string;
  InputLabel: string;
}

@Component({
  selector: 'app-add-new-inventory-item',
  templateUrl: './add-new-inventory-item.component.html',
  styleUrls: ['./add-new-inventory-item.component.css'],
})
export class AddNewInventoryItemComponent implements OnInit {
  newItem: InventoryItemModel = new InventoryItemModel();

  catOptions: string[] = this.inventoryService.getCategories();
  categories: Observable<string[]> = new Observable<string[]>();

  manOptions: string[] = this.inventoryService.getManufacturers();
  manufacturers: Observable<string[]> = new Observable<string[]>();

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
    Price: new FormControl('', [Validators.required, Validators.pattern('/^\\d+[\\.]\\d{2}$/i')]),
    Quantity: new FormControl('', [Validators.required]),
  });

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddNewInventoryItemComponent>,
    private inventoryService: InventoryService,
    @Inject(MAT_DIALOG_DATA) public data: AddNewInventoryItemData
  ) {}

  ngOnInit(): void {
    this.categories = this.IdentificationInfoFormGroup.controls['Category'].valueChanges.pipe(
      startWith(''),
      map(value => this._catFilter(value || '')),
    );
    this.manufacturers = this.IdentificationInfoFormGroup.controls['Manufacturer'].valueChanges.pipe(
      startWith(''),
      map(value => this._manFilter(value || '')),
    );
  }

  private _catFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.catOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _manFilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.manOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSumbit($event: MouseEvent) {
    this.newItem.name = this.BasicInfoFormGroup.get('Name')?.value;
    this.newItem.description = this.BasicInfoFormGroup.get('Description')?.value;
    this.newItem.serialNumber = this.IdentificationInfoFormGroup.get('SerialNumber')?.value;
    this.newItem.category = this.IdentificationInfoFormGroup.get('Category')?.value;
    this.newItem.manufacturer = this.IdentificationInfoFormGroup.get('Manufacturer')?.value;
    this.newItem.price = this.InventoryInfoFormGroup.get('Price')?.value;
    this.newItem.quantity = this.InventoryInfoFormGroup.get('Quantity')?.value;
    this.dialogRef.close(this.newItem);
  }
}
