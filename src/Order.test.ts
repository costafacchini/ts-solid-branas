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

