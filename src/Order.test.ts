import Order from './Order'
import Beer from './Beer'
import Whisky from './Whisky'
import Water from './Water'

test('Deve criar um pedido', () => {
  const order = new Order()
  order.AddItem(new Beer('Budweiser', 10))
  order.AddItem(new Whisky('Jack Daniels', 100))
  order.AddItem(new Water('Crystal', 1))

  const total = order.getTotal()

  expect(total).toBe(111)
})

test('Deve calcular os impostos', () => {
  const order = new Order()
  order.AddItem(new Beer('Budweiser', 10))
  order.AddItem(new Whisky('Jack Daniels', 100))
  order.AddItem(new Water('Crystal', 1))

  const impostos = order.getTaxes()

  expect(impostos).toBe(21)
})
