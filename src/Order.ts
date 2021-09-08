import Item from './Item'

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
      if (item.category === 'Beer') {
        taxes += item.price * 0.1
      }

      if (item.category === 'Whisky') {
        taxes += item.price * 0.2
      }
    }

    return taxes
  }

  getTotal() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0)
  }
}
