async function addItem (userCart, item) {
    userCart.push(item)
}

async function calculateTotal (userCart) {
    const result = userCart.reduce( (total, item) => total + item.subtotal(), 0)

    console.log('💸🛒Valor Total do Carrinho:')
    console.log(`💸Total: ${result.toFixed(2)}`)
}

async function deleteItem (userCart, name) {
    const index = userCart.findIndex( (item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1)
    }
}

async function removeItem (userCart, item) {

    const indexFound = userCart.findIndex( (p) => p.name === item.name)

    if (indexFound == -1) {
        console.log('item não encontrado')
        return
    }

    const itemToModify = userCart[indexFound]

    if (itemToModify.quantity > 1) {
        itemToModify.quantity -= 1

        itemToModify.subtotal = () => itemToModify.price * itemToModify.quantity

        return
    }
    else if (itemToModify.quantity === 1){
        userCart.splice(indexFound, 1)
        return
    }
}

async function displayCart (userCart) {
    console.log('\n==================================================================')
    console.log(`           📱SHOPEE LIST CART📱`)
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`)
    })
    console.log('==================================================================\n')
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem, 
    displayCart,
}
