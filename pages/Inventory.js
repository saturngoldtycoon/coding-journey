exports.Inventory = class Inventory {
    constructor(page) {
        this.page = page;
        this.headerTitle = page.locator('.app_logo');
        this.firstAddToCartButton = page.locator('.btn_inventory').first();
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    }
}