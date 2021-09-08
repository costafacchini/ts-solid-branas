import Item from "./Item"

export default class Beer extends Item {

  constructor(description: string, price: number) {
    super('Beer', description, price)
  }

  getTax() {
    return 0.1
  }
}