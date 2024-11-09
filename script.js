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
      this.items = []; // Array of ShoppingCartItem instances
    }
    
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
      }