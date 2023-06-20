"use strict";

const container = document.getElementById("container");
let cookiesTable;

const hoursOpen = [
  "6:00am",
  "7:00am",
  "8:00am",
  "9:00am",
  "10:00am",
  "11:00am",
  "12:00pm",
  "1:00pm",
  "2:00pm",
  "3:00pm",
  "4:00pm",
  "5:00pm",
  "6:00pm",
  "7:00pm",
];

const hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let totalOfTotals = 0;

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

Shop.prototype.getCookieData = function () {
  for (let i = 0; i < this.customersPerHour.length; i++) {
    this.cookiesPerHour.push(
      parseInt((this.customersPerHour[i] * this.avCookiesPerCustomer).toFixed())
    );
  }

  this.totalCookies = this.cookiesPerHour.reduce((a, b) => a + b, 0);
};

Shop.prototype.addToHourlyTotals = function () {
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    hourlyTotals[i] += this.cookiesPerHour[i];
  }
  totalOfTotals += this.totalCookies;
};

Shop.prototype.render = function () {
  this.getCustomersPerHour();
  this.getCookieData();
  this.addToHourlyTotals();

  //append row of data to cookiesTable
  const dataRow = document.createElement("tr");
  dataRow.setAttribute("class", "location-row");
  cookiesTable.appendChild(dataRow);

  const locationCell = document.createElement("th");
  locationCell.textContent = this.location;
  dataRow.appendChild(locationCell);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const dataCell = document.createElement("td");
    dataCell.textContent = this.cookiesPerHour[i];
    dataRow.appendChild(dataCell);
  }

  const totalCell = document.createElement("td");
  totalCell.textContent = this.totalCookies;
  totalCell.setAttribute("class", "highlight");
  dataRow.appendChild(totalCell);
};

function getHeaderRow() {
  cookiesTable = document.createElement("table");
  container.appendChild(cookiesTable);

  const headerRow = document.createElement("tr");
  cookiesTable.appendChild(headerRow);

  const emptyHeaderCell = document.createElement("th");
  headerRow.appendChild(emptyHeaderCell);

  for (let i = 0; i < hoursOpen.length; i++) {
    const headerCell = document.createElement("th");
    headerCell.textContent = hoursOpen[i];
    headerRow.appendChild(headerCell);
  }

  const headerCellTotal = document.createElement("th");
  //   headerCellTotal.setAttribute("class", "highlight");
  headerCellTotal.textContent = "Total";
  headerRow.appendChild(headerCellTotal);
}

function getFooterRow() {
  const footerRow = document.createElement("tr");

  cookiesTable.appendChild(footerRow);

  const firstFooterCell = document.createElement("th");
  firstFooterCell.textContent = "Totals";
  footerRow.appendChild(firstFooterCell);

  for (let i = 0; i < hourlyTotals.length; i++) {
    const footerCell = document.createElement("td");
    footerCell.setAttribute("class", "highlight footer-row");
    footerCell.textContent = hourlyTotals[i];
    footerRow.appendChild(footerCell);
  }

  const absoluteTotalCell = document.createElement("td");
  absoluteTotalCell.setAttribute("class", "total footer-row");
  absoluteTotalCell.textContent = totalOfTotals;
  footerRow.appendChild(absoluteTotalCell);
}

getHeaderRow();

const seattle = new Shop("Seattle", 23, 65, 6.3);
const tokyo = new Shop("Tokyo", 3, 24, 1.2);
const paris = new Shop("Paris", 20, 38, 2.3);
const dubai = new Shop("Dubai", 11, 38, 3.7);
const lima = new Shop("Lima", 2, 16, 4.6);

getFooterRow();
