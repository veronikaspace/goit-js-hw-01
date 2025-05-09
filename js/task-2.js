function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    console.log(totalPrice);
    const msg = `Shipping to ${country} will cost ${totalPrice} credits`;
    console.log(msg);
    return getShippingMessage;
}

getShippingMessage("Australia", 120, 50); 
getShippingMessage("Germany", 80, 20); 
getShippingMessage("Sweden", 100, 20); 
