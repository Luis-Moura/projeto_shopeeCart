import createItem from "./services/item.js"
import * as cartService from './services/cart.js'

const myCart = []
// const myWhishList = []

console.log('\n---------------------------------------')
console.log(`🛒 Welcome to the your Shopee Cart 🛒`)
console.log('---------------------------------------')


//criando item
const item1 = await createItem(1, 'Camisa Megadeth', 50.90, 3)
const item2 = await createItem(2, 'Camisa Chico Moedas', 20.99, 1)
const item3 = await createItem(3, 'Camisa Metallica', 30.90, 1)
const item4 = await createItem(4, 'Camisa Nirvana', 20.99, 2)
const item5 = await createItem(5, 'Camisa Black Sabbath', 30.99, 3)
const item6 = await createItem(6, 'Camisa Alice in Chains', 19.99, 1)
const item7 = await createItem(7, 'Camisa AudioSalve', 44.60, 2)
const item8 = await createItem(8, 'Camisa Scorpions', 10.99, 4)

//adicionando item no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item3)
await cartService.addItem(myCart, item4)
await cartService.addItem(myCart, item5)
await cartService.addItem(myCart, item6)
await cartService.addItem(myCart, item7)
await cartService.addItem(myCart, item8)

//deletando item
await cartService.deleteItem(myCart, item3.name)
await cartService.deleteItem(myCart, item2.name)

//removendo um item
await cartService.removeItem(myCart, item8)

//
await cartService.displayCart(myCart)
await cartService.calculateTotal(myCart)
