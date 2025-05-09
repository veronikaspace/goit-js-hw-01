function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    console.log(totalPrice);
    const msg = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    console.log(msg)
    return makeTransaction;
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500); 