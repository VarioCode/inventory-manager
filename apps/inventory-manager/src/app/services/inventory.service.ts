import { Injectable } from '@angular/core';
import { InventoryItemModel } from '../models/inventory-item.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor() {}

  getInventoryItems(): InventoryItemModel[] {
    //TODO: Get inventory items from the server
    return new InventoryItemModel().getDummyData();
  }

  getManufacturers(): string[] {
    //TODO: Get manufacturers from the server

    //Generate dummy data
    let manufacturers: string[] = [];
    for (let i = 0; i < 10; i++) {
      manufacturers.push('Manufacturer ' + i);
    }
    return manufacturers;
  }

  getCategories(): string[] {
    //TODO: Get categories from the server
    let categories: string[] = [];
    for (let i = 0; i < 10; i++) {
      categories.push('Category ' + i);
    }
    return categories;
  }
}
