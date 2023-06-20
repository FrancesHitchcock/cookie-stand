"use strict";

const hoursOpen = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Shop(location, minCustomers, maxCustomers, avCookiesPerCustomer) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avCookiesPerCustomer = avCookiesPerCustomer;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  this.render();
}

Shop.prototype.getCustomersPerHour = function () {
  for (let i = 0; i < hoursOpen.length; i++) {
    this.customersPerHour.push(
      getRandomNum(this.minCustomers, this.maxCustomers)
    );
  }
};

Shop.prototype.render = function () {
  this.getCustomersPerHour();
};

const seattle = new Shop("Seattle", 23, 65, 6.3);

console.log(seattle);
