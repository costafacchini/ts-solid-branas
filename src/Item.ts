export default class Item {
  category: string
  description: string
  price: number

  constructor(category: string, description: string, price: number) {
    this.category = category
    this.description = description
    this.price = price
  }

  calculateTaxes() {
    if (this.category === 'Beer') {
      return this.price * 0.1
    }

    if (this.category === 'Whisky') {
      return this.price * 0.2
    }

    return 0
  }

}
