var sale1 = { price: 140, taxrate: 15};
var sale2 = { price: 40, taxrate: 10};
var sale3 = { price: 120, taxrate: 20};
var sale4 = { price: 200, taxrate: 18};

function processSale(sale) {
    sale.tax = sale.price * sale.taxrate / 100;
    sale.total = sale.price + sale.tax;
    console.log("price = $" + sale.price);
    console.log("tax @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("total cost = $" + sale.totla);
}
processSale(sale1);
processSale(sale2);
processSale(sale3);
processSale(sale4);
