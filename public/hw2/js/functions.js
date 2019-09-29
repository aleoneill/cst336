// var name = document.getElementById("name");
// var address = document.getElementById("address");
// var city = document.getElementById("city");
// var s = document.getElementById("state");
// var state = s.options.selectedIndex.text;
// var zip = document.getElementById("zip");
// var phoneNumber = document.getElementById("phone");
// var cardNumber = document.getElementById("card");
// var cardLast4 = cardNumber.substr(16, 19);

function getSelectedValue() {
    var a = document.getElementById("quantityA");
    var itemAQuantity = a.options[a.selectedIndex].value;
    var b = document.getElementById("quantityB");
    var itemBQuantity = b.options[b.selectedIndex].value;
    var total;
    var itemAPrice = 2;
    var itemBPrice = 3;
    var totalItems;
    var itemTotalWithoutTax;
    var tax;
    itemAQuantity = Number(itemAQuantity);
    itemBQuantity = Number(itemBQuantity);
    totalItems = itemAQuantity + itemBQuantity;

    if (totalItems == 0) {
        return;
    } else {
        itemTotalWithoutTax = (itemAPrice * itemAQuantity) + (itemBPrice * itemBQuantity);
        tax = itemTotalWithoutTax * .07;
        total = (itemAQuantity * itemAPrice) + (itemBQuantity * itemBPrice) + tax;
        document.getElementById("subtotal").innerHTML = `Subtotal (${totalItems}) items $ ${total}`;
    }
}
// function displayOrderTotal() {
//     document.getElementById("items").innerHTML = `Items (${totalItems}`;
//     document.getElementById("totalBeforeTax").innerHTML = `Total before tax: $${itemTotalWithoutTax}`;
//     document.getElementById("tax").innerHTML = `Order Total $${total}`;
// }
//
// function orderPlaced() {
//     alert("Thank you, " + name + " for your order! We will deliver your order to " + address + " " + city + " ," + state + " ," +
//         zip + ". The card ending in " + cardLast4 + " will be charged a total of $" + total + ". If there are any issues with delivering" +
//         "your oder, we will call you at " + phoneNumber + ". Thank you for your business!");
// }




