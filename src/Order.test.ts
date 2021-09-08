import Order from './Order'
import Item from './Item'

test('Deve criar um pedido', () => {
  const order = new Order()
  order.AddItem(new Item('Beer', 'Budweiser', 10))
  order.AddItem(new Item('Whisky', 'Jack Daniels', 100))
  order.AddItem(new Item('Water', 'Crystal', 1))

  const total = order.getTotal()

  expect(total).toBe(111)
})

test('Deve calcular os impostos', () => {
  const order = new Order()
  order.AddItem(new Item('Beer', 'Budweiser', 10)) //10:
  order.AddItem(new Item('Whisky', 'Jack Daniels', 100)) //20
  order.AddItem(new Item('Water', 'Crystal', 1)) //Isento

  const impostos = order.getTaxes()

  expect(impostos).toBe(21)
})
