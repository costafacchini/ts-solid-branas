import Order from './Order'
import Beer from './Beer'
import Whisky from './Whisky'
import Water from './Water'
import MessageDataFile from './MessageDataFile'

test('Deve criar um pedido', () => {
  const order = new Order(new MessageDataFile)
  order.AddItem(new Beer('Budweiser', 10))
  order.AddItem(new Whisky('Jack Daniels', 100))
  order.AddItem(new Water('Crystal', 1))

  const total = order.getTotal()

  expect(total).toBe(111)
})

test('Deve calcular os impostos', () => {
  const order = new Order(new MessageDataFile)
  order.AddItem(new Beer('Budweiser', 10))
  order.AddItem(new Whisky('Jack Daniels', 100))
  order.AddItem(new Water('Crystal', 1))

  const impostos = order.getTaxes()

  expect(impostos).toBe(21)
})

test('Deve criar um pedido e imprimir uma mensagem em português', async () => {
  const order = new Order(new MessageDataFile)
  order.AddItem(new Beer('Budweiser', 10))
  order.AddItem(new Whisky('Jack Daniels', 100))
  order.AddItem(new Water('Crystal', 1))

  const message = await order.printMessage('pt')

  expect(message).toBe('O total foi de R$111, os impostos foram R$21. Obrigado pelo seu pedido!')
})

test('Deve criar um pedido e imprimir uma mensagem em inglês', async () => {
  const order = new Order(new MessageDataFile)
  order.AddItem(new Beer('Budweiser', 10))
  order.AddItem(new Whisky('Jack Daniels', 100))
  order.AddItem(new Water('Crystal', 1))

  const message = await order.printMessage('en')

  expect(message).toBe('The total was R$111, the taxes was R$21. Thanks for your order!')
})