var shipping = document.getElementsByName('delivery');
var shippingTotal;
var item1 = document.getElementById('totalItem1');
var item2 = document.getElementById('totalItem2');
var subtotal = document.getElementById('subtotal');
var tax;
var total;
function calculateShipping() {

    for (var i=0; i < shipping.length; i++){
        if (shipping[i].checked) {
            shippingTotal = shipping[i].value;
        }
    }
    document.getElementById('shippingCost').innerHTML = `${shippingTotal}`;
}

// calculate tax
// itemTotalWithoutTax = (itemAPrice * itemAQuantity) + (itemBPrice * itemBQuantity);
// tax = itemTotalWithoutTax * .10;
// total = (itemAQuantity * itemAPrice) + (itemBQuantity * itemBPrice) + tax;

