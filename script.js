class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  

    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }

  class ShoppingCart {
    constructor() {
      this.items = []; 
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
      }

      addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        
        if (existingItem) {
   
          existingItem.quantity += quantity;
        } else {
        
          this.items.push(new ShoppingCartItem(product, quantity));
        }
      }

      displayCartItems() {
        this.items.forEach(item => {
          console.log(`Product: ${item.product.name}, Price: $${item.product.price}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice()}`);
        });
      }

      getTotalCartPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
      }
    }

    const product1 = new Product(1, 'BMW', 120000);
const product2 = new Product(2, 'Subaru', 160000);
const product3 = new Product(3, 'Ferrari', 150000);

const cart = new ShoppingCart();

cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);


console.log("Cart Items:");
cart.displayCartItems();\

console.log(`Total items in cart: ${cart.getTotalItems()}`);
console.log(`Total cart price: $${cart.getTotalCartPrice()}`);
