export class InventoryItemModel {
  id: number;
  name: string;
  description: string;
  serialNumber: string;
  manufacturer: string;
  category: string;
  price: number;
  quantity?: number;

  constructor() {
    this.id = 0;
    this.name = '';
    this.serialNumber = '';
    this.description = '';
    this.manufacturer = '';
    this.category = '';
    this.price = 0;
    this.quantity = 0;
  }

  getDummyData(): InventoryItemModel[] {
    let tempArray: InventoryItemModel[] = [];
    for (let i = 0; i < 50; i++) {
      let newItem = new InventoryItemModel();
      newItem.id = i+1;
      newItem.name = 'Dummy Item';
      newItem.serialNumber = 'item-' + i + '-serial';
      newItem.description = 'This is a dummy item';
      newItem.manufacturer = 'Dummy Manufacturer';
      newItem.category = 'Dummy Category';
      newItem.price = 100;
      newItem.quantity = 10;
      tempArray.push(newItem);
    }

    return tempArray;
  }
}
