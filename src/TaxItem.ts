import Item from './Item'

export default abstract class TaxItem extends Item {

  calculateTaxes(): number {
    return this.price * this.getTax()
  }

  abstract getTax(): number

}
