export class InventoryItemModel {
  name: string;
  SerialNumber: string;
  price: number;
  quantity?: number;

  constructor() {
    this.name = '';
    this.SerialNumber = '';
    this.price = 0;
    this.quantity = 0;
  }
}
