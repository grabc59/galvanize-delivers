'use strict';
var subtotal = 0;
var tax = 0;
var total = 0;
var subtotalTD = $("#calculations").children().last();
var taxTD = $('#tax').children().last();
var totalTD = $('#total').children().last();


$(document).ready(function() {

////////////////////////////////////
//////////// Item form validation
////////////////////////////////////
  $("#place-order-btn").on("click", function(event) {
    if ($('tbody').children().length <= 3) {
      event.preventDefault();
      Materialize.toast('You have not selected any items!', 4000);
    }
    else if ($("#delivery-name").val() === "" || $("#delivery-phone").val() === "" || $("#delivery-address").val() === "") {
      event.preventDefault();
      Materialize.toast('Please complete the delivery form', 4000);
    } else {
      Materialize.toast('Order is on the way, thank you!', 4000);
    }
  })
});

////////////////////////////////////
//////////// Item form validation
////////////////////////////////////
function addItem(itemName, cost) {
  event.preventDefault();
  $("<tr><td>" + itemName + "</td><td></td><td>" + "$" + cost + "</td></tr>").insertBefore("#calculations");
  subtotal += cost;
  tax = subtotal * 0.029;
  total = subtotal + tax;
  subtotalTD.text("$" + subtotal.toFixed(2));
  taxTD.text("$" + tax.toFixed(2));
  totalTD.text("$" + total.toFixed(2));
}
