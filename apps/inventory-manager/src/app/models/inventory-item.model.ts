export class InventoryItemModel {
  name: string;
  description: string;
  serialNumber: string;
  manufacturer: string;
  category: string;
  price: number;
  quantity?: number;

  constructor() {
    this.name = '';
    this.serialNumber = '';
    this.description = '';
    this.manufacturer = '';
    this.category = '';
    this.price = 0;
    this.quantity = 0;
  }

  getDummyData(): InventoryItemModel[] {
    this.name = 'Dummy Item';
    this.serialNumber = '123456789';
    this.description = 'This is a dummy item';
    this.manufacturer = 'Dummy Manufacturer';
    this.category = 'Dummy Category';
    this.price = 100;
    this.quantity = 10;
    return [this];
  }
}
