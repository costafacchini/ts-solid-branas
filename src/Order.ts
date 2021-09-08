import Item from './Item'

export default class Order {
  items: Item[]

  constructor() {
    this.items = []
  }

  AddItem(item: Item) {
    this.items.push(item)
  }

  getTotal() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0)
  }
}
