'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var allCookieStores = [];

var seattle = new CookieStoreExpansion('Seattle', 23, 65, 6.3);
var tokyo = new CookieStoreExpansion('Tokyo', 3, 24, 1.2);
var dubai = new CookieStoreExpansion('Dubai', 11, 38, 3.7);
var paris = new CookieStoreExpansion('Paris', 20, 28, 2.3);
var lima = new CookieStoreExpansion('Lima', 2, 16, 4.6);

////Constructor////

function CookieStoreExpansion(storeName, minimumCustomersPerHour, maximumCustomersPerHour, averageCookieSalePerCustomer, customersPerHour, cookiesSoldEachHour){
  this.storeName = storeName;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookieSalePerCustomer = averageCookieSalePerCustomer;
  this.totalCookiesForTheDay = 0;
  this.customersPerHour = [];
  this.cookiesSoldEachHour = [];

  allCookieStores.push(this);
}

////////Prototypes///////

CookieStoreExpansion.prototype.generateCustomersPerHour = function(){
  for(var i = 0; i < hoursOfOperation.length; i++){
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
    this.customersPerHour.push(randomNumber);
  }
};


CookieStoreExpansion.prototype.generateCookiesSoldEachHour = function(){
  this.generateCustomersPerHour();
  for(var i = 0; i < hoursOfOperation.length; i++){
    var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
    this.totalCookiesForTheDay += cookiesSoldThisHour; //total for each city
    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
};

//////Table//////

//will be shared by function and prototype
var parentElement = document.getElementById('storestable');


function generateHeaderRow(){
  var tableRowElement = document.createElement('tr');
  var tableHeaderElement = document.createElement('th');
  tableRowElement.appendChild(tableHeaderElement);

  //run for loop to put store hours across the top
  for(var i = 0; i < hoursOfOperation.length; i++){
    var headerHours = document.createElement('th');
    headerHours.textContent = hoursOfOperation[i];
    tableRowElement.appendChild(headerHours);
  }
  //after for loop is done, enter the 'total' header cell
  var storeDailyTotalSold = document.createElement('th');
  storeDailyTotalSold.textContent = 'Daily Total per Store';
  tableRowElement.appendChild(storeDailyTotalSold);

  parentElement.appendChild(tableRowElement);
}

CookieStoreExpansion.prototype.generateRows = function(){

  //creates a tableRow each time the prototype is called
  var tableRowElement = document.createElement('tr');

  //calls the values
  this.generateCookiesSoldEachHour();

  //sticks store name before values for the 5 times the prototype is called, muahahaha
  this.cookiesSoldEachHour.unshift(this.storeName);

  //this runs the text 15 times (included extra to add name with unshift)
  for(var i=0; i <= hoursOfOperation.length; i++) {

    //created table data in the loop
    var tabledataElement = document.createElement('td');

    //writes that info into each cell (we snuck names in with unshift)
    tabledataElement.textContent = `${this.cookiesSoldEachHour[i]}`;
    tableRowElement.appendChild(tabledataElement);
  }

  // adds daily totals up
  var tabledataTwoElement = document.createElement('td');
  tabledataTwoElement.textContent = `${this.totalCookiesForTheDay}`; //day total for city
  tableRowElement.appendChild(tabledataTwoElement);

  parentElement.appendChild(tableRowElement);
};

generateHeaderRow();
seattle.generateRows();
tokyo.generateRows();
dubai.generateRows();
paris.generateRows();
lima.generateRows();
