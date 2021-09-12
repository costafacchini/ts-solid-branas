import Item from './Item'
import TaxItem from './TaxItem'
import MessgageData from './MessageData'

export default class Order {
  items: Item[]
  messageData: MessgageData

  constructor(messageData: MessgageData) {
    this.items = []
    this.messageData = messageData
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
    const message = await this.messageData.read(language)
    return message.replace('${total}', this.getTotal() + '').replace('${taxes}', this.getTaxes() + '')
  }
}
