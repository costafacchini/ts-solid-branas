import Item from './Item'
import TaxItem from './TaxItem'

export default class Order {
  items: Item[]

  constructor() {
    this.items = []
  }

  AddItem(item: Item) {
    this.items.push(item)
  }

  getTaxes() {
    let taxes = 0

    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTaxes()
      }
    }

    return taxes
  }

  getTotal() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0)
  }
}
