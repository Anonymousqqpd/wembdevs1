function buyWiFi(price) {
  var amount = parseInt(prompt("Please insert the required amount to get WiFi access:"));
  if (isNaN(amount)) {
    document.getElementById("status").innerHTML = "Invalid amount. Please try again.";
    return;
  }
  
  if (amount < price) {
    document.getElementById("status").innerHTML = "Insufficient amount. Please insert enough money.";
  } else {
    var change = amount - price;
    document.getElementById("status").innerHTML = "Thank you for your purchase! Your WiFi access has been granted. Your change is $" + change.toFixed(2);
  }
}
