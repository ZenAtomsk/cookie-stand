'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var allStores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

var seattle = {

  storeName: 'Seattle',

  minimumCustomersPerHour: 23,

  maximumCustomersPerHour: 65,

  averageCookieSalePerCustomer: 6.3,

  totalCookiesForTheDay: 0,

  customersPerHour: [],

  cookiesSoldEachHour: [],

  generateCustomersPerHour: function(){
    for(var i = 0; i < hoursOfOperation.length; i++){
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
      this.customersPerHour.push(randomNumber);
    }
  },

  generateCookiesSoldEachHour: function(){
    seattle.generateCustomersPerHour();
    for(var i = 0; i < hoursOfOperation.length; i++){
      var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
      this.totalCookiesForTheDay += cookiesSoldThisHour;
      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    }
  },

  render: function(){
    var parentSection = document.getElementById('seattle');

    var headingSeattle = document.createElement('h2');
    headingSeattle.textContent = this.storeName; //names it Seattle
    parentSection.appendChild(headingSeattle);

    var salesList = document.getElementById('seattle-sales');

    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
      var liElement = document.createElement('li');
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      salesList.appendChild(liElement);
    }
  },
};

seattle.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
seattle.render();
// console.log(seattle.generateCookiesSoldEachHour());


var tokyo = {

  storeName: 'Tokyo',

  minimumCustomersPerHour: 3,

  maximumCustomersPerHour: 24,

  averageCookieSalePerCustomer: 1.2,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(tokyo.generateCustPerHour());

var dubai = {

  storeName: 'Dubai',

  minimumCustomersPerHour: 11,

  maximumCustomersPerHour: 38,

  averageCookieSalePerCustomer: 3.7,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(dubai.generateCustPerHour());

var paris = {

  storeName: 'Paris',

  minimumCustomersPerHour: 20,

  maximumCustomersPerHour: 38,

  averageCookieSalePerCustomer: 2.3,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(paris.generateCustPerHour());

var lima = {

  storeName: 'Lima',

  minimumCustomersPerHour: 2,

  maximumCustomersPerHour: 16,

  averageCookieSalePerCustomer: 4.6,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour) + this.minimumCustomersPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(lima.generateCustPerHour());
