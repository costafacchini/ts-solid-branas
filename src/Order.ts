import Item from './Item'
import TaxItem from './TaxItem'
import fs from 'fs/promises'

export default class Order {
  items: Item[]

  constructor() {
    this.items = []
  }

  AddItem(item: Item) {
    this.items.push(item)
  }

  getTaxes(): number {
    let taxes = 0

    for (const item of this.items) {
      if (item instanceof TaxItem) {
        taxes += item.calculateTaxes()
      }
    }

    return taxes
  }

  getTotal(): number {
    return this.items.reduce((prev, curr) => prev + curr.price, 0)
  }

  async printMessage(language: string): Promise<string> {
    const message = await fs.readFile(`./messages/${language}.txt`, 'utf-8')
    return message.replace('${total}', this.getTotal() + '').replace('${taxes}', this.getTaxes() + '')
  }
}
