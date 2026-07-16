exports.Inventory = class Inventory {
    constructor(page) {
        this.page = page;
        this.headerTitle = page.locator('title');
        this.firstAddToCartButton = page.locator('button_inventory').first();
        this.shoppingCartBadge = page.locator('shopping_cart_badge');
    }
}