import Item from "./Item"

export default class Whisky extends Item {

  constructor(description: string, price: number) {
    super('Whisky', description, price)
  }

  getTax() {
    return 0.2
  }
}
