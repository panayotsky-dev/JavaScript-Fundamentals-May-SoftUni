// You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
// The following information applies to both arrays:
// Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
// All of the arrays’ values will be strings.
function storeProvision(stocks,forDelivery){
let productsInStore = {};
let stocksL = stocks.length;
let forDeliveryL = forDelivery.length;
for ( let i = 0; i < forDeliveryL; i+=2){
    let product = stocks[i];
    let quantity = stocks[i+1];
    productsInStore[product] = +quantity;
    
}
for ( let x = 0; x < forDeliveryL; x+=2){
    let product = forDelivery[x];
    if(!productsInStore.hasOwnProperty(product)){
        productsInStore[product] = 0;
    }
    productsInStore[product] += +forDelivery[x+1];
}
for (const product in productsInStore) {
   console.log(`${product} -> ${productsInStore[product]}`);
}
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )