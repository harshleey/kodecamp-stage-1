function Product (name, price) {
 this.name = name;
 this.price = price
}

function ShoppingCart () {
 const items = []

 this.addItem = (item) => {
  items.push(item)
 }

 this.deleteItem = (item) => {
  // Find the index of the value to be deleted, and slice it
  // console.log(item.name, item.price)

  let itemDeleted = items.findIndex((e) => e.name == item.name && e.price && item.price)
  items.splice(itemDeleted, 1)
 }

 this.getTotal = () => {
  let total = items.reduce((sum, curr) => sum + curr.price, 0)
  return total
 }

 this.getCartItems = () => {
  return items
 }
}

const items = new ShoppingCart()

const pringles = new Product("Pringles", 50)
const yam = new Product("Yam", 50)
const bag = new Product("Celine Bag", 5000)

items.addItem(pringles)
items.addItem(yam)
items.addItem(bag)
items.getTotal()
items.getCartItems()
items.deleteItem(bag)
items.getCartItems()