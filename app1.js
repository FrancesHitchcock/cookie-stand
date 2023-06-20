"use strict";

// create sales data object for Seattle
// properties - minCustomers, maxCustomers, avCookiesPerCustomer
// method - getNumberofCustomersPerHour(random num) - returns array
// method - getCookiesSoldEachHour - returns array

function getRandomNumberOfCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  location: "Seattle",
  hoursOpen: [
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
  ],
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avCookiesPerCustomer: 6.3,
  getNumberOfCustomersPerHour: function () {
    const customersPerHour = [];
    for (let i = 0; i < 14; i++) {
      customersPerHour.push(
        getRandomNumberOfCustomers(
          this.minHourlyCustomers,
          this.maxHourlyCustomers
        )
      );
    }
    return customersPerHour;
  },

  getNumberOfCookiesPerHour: function () {
    const numberOfCustomersPerHour = this.getNumberOfCustomersPerHour();
    const cookiesPerHour = [];
    let totalCookies = 0;
    for (let i = 0; i < numberOfCustomersPerHour.length; i++) {
      cookiesPerHour.push(
        (numberOfCustomersPerHour[i] * this.avCookiesPerCustomer).toFixed()
      );
    }

    for (let i = 0; i < cookiesPerHour.length; i++) {
      totalCookies += parseInt(cookiesPerHour[i]);
    }

    cookiesPerHour.push(totalCookies);

    return cookiesPerHour;
  },

  render: function () {
    const numberOfCookiesPerHour = this.getNumberOfCookiesPerHour();
    const container = document.getElementById("container");

    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h2");
    article.appendChild(h3);
    h3.textContent = this.location;

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < this.hoursOpen.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${this.hoursOpen[i]}: ${numberOfCookiesPerHour[i]} cookies`;
      ul.appendChild(li);
    }

    const liTotal = document.createElement("li");
    ul.append(liTotal);
    liTotal.textContent = `Total: ${
      numberOfCookiesPerHour[numberOfCookiesPerHour.length - 1]
    } cookies`;
  },
};

const tokyo = {
  location: "Tokyo",
  hoursOpen: [
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
  ],
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avCookiesPerCustomer: 1.2,
  getNumberOfCustomersPerHour: function () {
    const customersPerHour = [];
    for (let i = 0; i < 14; i++) {
      customersPerHour.push(
        getRandomNumberOfCustomers(
          this.minHourlyCustomers,
          this.maxHourlyCustomers
        )
      );
    }
    return customersPerHour;
  },

  getNumberOfCookiesPerHour: function () {
    const numberOfCustomersPerHour = this.getNumberOfCustomersPerHour();
    const cookiesPerHour = [];
    let totalCookies = 0;
    for (let i = 0; i < numberOfCustomersPerHour.length; i++) {
      cookiesPerHour.push(
        (numberOfCustomersPerHour[i] * this.avCookiesPerCustomer).toFixed()
      );
    }

    for (let i = 0; i < cookiesPerHour.length; i++) {
      totalCookies += parseInt(cookiesPerHour[i]);
    }

    cookiesPerHour.push(totalCookies);

    return cookiesPerHour;
  },

  render: function () {
    const numberOfCookiesPerHour = this.getNumberOfCookiesPerHour();
    const container = document.getElementById("container");

    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h2");
    article.appendChild(h3);
    h3.textContent = this.location;

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < this.hoursOpen.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${this.hoursOpen[i]}: ${numberOfCookiesPerHour[i]} cookies`;
      ul.appendChild(li);
    }

    const liTotal = document.createElement("li");
    ul.append(liTotal);
    liTotal.textContent = `Total: ${
      numberOfCookiesPerHour[numberOfCookiesPerHour.length - 1]
    } cookies`;
  },
};

const paris = {
  location: "Paris",
  hoursOpen: [
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
  ],
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avCookiesPerCustomer: 2.3,
  getNumberOfCustomersPerHour: function () {
    const customersPerHour = [];
    for (let i = 0; i < 14; i++) {
      customersPerHour.push(
        getRandomNumberOfCustomers(
          this.minHourlyCustomers,
          this.maxHourlyCustomers
        )
      );
    }
    return customersPerHour;
  },

  getNumberOfCookiesPerHour: function () {
    const numberOfCustomersPerHour = this.getNumberOfCustomersPerHour();
    const cookiesPerHour = [];
    let totalCookies = 0;
    for (let i = 0; i < numberOfCustomersPerHour.length; i++) {
      cookiesPerHour.push(
        (numberOfCustomersPerHour[i] * this.avCookiesPerCustomer).toFixed()
      );
    }

    for (let i = 0; i < cookiesPerHour.length; i++) {
      totalCookies += parseInt(cookiesPerHour[i]);
    }

    cookiesPerHour.push(totalCookies);

    return cookiesPerHour;
  },

  render: function () {
    const numberOfCookiesPerHour = this.getNumberOfCookiesPerHour();
    const container = document.getElementById("container");

    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h2");
    article.appendChild(h3);
    h3.textContent = this.location;

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < this.hoursOpen.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${this.hoursOpen[i]}: ${numberOfCookiesPerHour[i]} cookies`;
      ul.appendChild(li);
    }

    const liTotal = document.createElement("li");
    ul.append(liTotal);
    liTotal.textContent = `Total: ${
      numberOfCookiesPerHour[numberOfCookiesPerHour.length - 1]
    } cookies`;
  },
};

const dubai = {
  location: "Dubai",
  hoursOpen: [
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
  ],
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avCookiesPerCustomer: 3.7,
  getNumberOfCustomersPerHour: function () {
    const customersPerHour = [];
    for (let i = 0; i < 14; i++) {
      customersPerHour.push(
        getRandomNumberOfCustomers(
          this.minHourlyCustomers,
          this.maxHourlyCustomers
        )
      );
    }
    return customersPerHour;
  },

  getNumberOfCookiesPerHour: function () {
    const numberOfCustomersPerHour = this.getNumberOfCustomersPerHour();
    const cookiesPerHour = [];
    let totalCookies = 0;
    for (let i = 0; i < numberOfCustomersPerHour.length; i++) {
      cookiesPerHour.push(
        (numberOfCustomersPerHour[i] * this.avCookiesPerCustomer).toFixed()
      );
    }

    for (let i = 0; i < cookiesPerHour.length; i++) {
      totalCookies += parseInt(cookiesPerHour[i]);
    }

    cookiesPerHour.push(totalCookies);

    return cookiesPerHour;
  },

  render: function () {
    const numberOfCookiesPerHour = this.getNumberOfCookiesPerHour();
    const container = document.getElementById("container");

    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h2");
    article.appendChild(h3);
    h3.textContent = this.location;

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < this.hoursOpen.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${this.hoursOpen[i]}: ${numberOfCookiesPerHour[i]} cookies`;
      ul.appendChild(li);
    }

    const liTotal = document.createElement("li");
    ul.append(liTotal);
    liTotal.textContent = `Total: ${
      numberOfCookiesPerHour[numberOfCookiesPerHour.length - 1]
    } cookies`;
  },
};

const lima = {
  location: "Lima",
  hoursOpen: [
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
  ],
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avCookiesPerCustomer: 4.6,
  getNumberOfCustomersPerHour: function () {
    const customersPerHour = [];
    for (let i = 0; i < 14; i++) {
      customersPerHour.push(
        getRandomNumberOfCustomers(
          this.minHourlyCustomers,
          this.maxHourlyCustomers
        )
      );
    }
    return customersPerHour;
  },

  getNumberOfCookiesPerHour: function () {
    const numberOfCustomersPerHour = this.getNumberOfCustomersPerHour();
    const cookiesPerHour = [];
    let totalCookies = 0;
    for (let i = 0; i < numberOfCustomersPerHour.length; i++) {
      cookiesPerHour.push(
        (numberOfCustomersPerHour[i] * this.avCookiesPerCustomer).toFixed()
      );
    }

    for (let i = 0; i < cookiesPerHour.length; i++) {
      totalCookies += parseInt(cookiesPerHour[i]);
    }

    cookiesPerHour.push(totalCookies);

    return cookiesPerHour;
  },

  render: function () {
    const numberOfCookiesPerHour = this.getNumberOfCookiesPerHour();
    const container = document.getElementById("container");

    const article = document.createElement("article");
    container.appendChild(article);

    const h3 = document.createElement("h2");
    article.appendChild(h3);
    h3.textContent = this.location;

    const ul = document.createElement("ul");
    article.appendChild(ul);

    for (let i = 0; i < this.hoursOpen.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${this.hoursOpen[i]}: ${numberOfCookiesPerHour[i]} cookies`;
      ul.appendChild(li);
    }

    const liTotal = document.createElement("li");
    ul.append(liTotal);
    liTotal.textContent = `Total: ${
      numberOfCookiesPerHour[numberOfCookiesPerHour.length - 1]
    } cookies`;
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
