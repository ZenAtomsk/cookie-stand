'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var allCookieStores = [];

//will be shared by function and prototype
var parentElement = document.getElementById('storestable');



////Constructor////

function CookieStoreExpansion(storeName, minimumCustomersPerHour, maximumCustomersPerHour, averageCookieSalePerCustomer){
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


CookieStoreExpansion.prototype.generateCookiesSoldEachHour = function(){
  for(var i = 0; i < hoursOfOperation.length; i++){
    var customersForTheHour = generateRandomNumber(this.maximumCustomersPerHour, this.minimumCustomersPerHour);
    this.customersPerHour.push(customersForTheHour);
  }
  for(var j = 0; j < hoursOfOperation.length; j++){
    var cookiesSoldThisHour = Math.floor(this.customersPerHour[j] * this.averageCookieSalePerCustomer);
    this.totalCookiesForTheDay += cookiesSoldThisHour; //total for each city
    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
}

//////Helper Function

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//////Table//////


function headerRow(){
  var trElement = document.createElement('tr');

  //run for loop to put store hours across the top
  for(var i = 0; i < hoursOfOperation.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = hoursOfOperation[i];
    trElement.appendChild(thElement);
  }
  //after for loop is done, enter the 'total' header cell
  var thElement2 = document.createElement('th');
  thElement2.textContent = 'Daily Total per Store';
  trElement.appendChild(thElement2);

  parentElement.appendChild(trElement);
}


CookieStoreExpansion.prototype.render = function(){
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = this.storeName;
  trElement.appendChild(thElement);

  //make a for and loop over cookies sold each hour
  for(var i = 0; i < this.cookiesSoldEachHour.length; i++){

    var totalCookiesData = document.createElement('td');
    totalCookiesData.textContent = this.cookiesSoldEachHour[i];
    trElement.appendChild(totalCookiesData);
  }
  parentElement.appendChild(trElement);
};

function generateFooterRow(){
  var totalOfTotals = 0;
  var hourlyTotalsArray = [];

  var trElement = document.createElement('tr');

  var totalPerHour = document.createElement('td');
  totalPerHour.textContent = 'Total Per Hour';
  trElement.appendChild(totalPerHour);

  for(var i = 0; i< hoursOfOperation.length; i++){

    var hourlyCookieSales = 0;

    for(var j = 0; j < allCookieStores.length; j++){
      hourlyCookieSales += allCookieStores[j].cookiesSoldEachHour[i];

      totalOfTotals += allCookieStores[j].cookiesSoldEachHour[i];
    }
    hourlyTotalsArray.push(hourlyCookieSales);
  }

  console.log('totaloftotals', totalOfTotals);
  console.log('hourly', hourlyTotalsArray);

  for(var k = 0; k < hourlyTotalsArray.length; k++){

    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotalsArray[k];
    trElement.appendChild(tdElement);
  }

  parentElement.appendChild(trElement);
}

new CookieStoreExpansion('Seattle', 23, 65, 6.3);
new CookieStoreExpansion('Tokyo', 3, 24, 1.2);
new CookieStoreExpansion('Dubai', 11, 38, 3.7);
new CookieStoreExpansion('Paris', 20, 38, 2.3);
new CookieStoreExpansion('Lima', 2, 16, 4.6);

headerRow();

for(var i = 0; i < allCookieStores.length; i++){
  allCookieStores[i].generateCookiesSoldEachHour();
  allCookieStores[i].render();
}

generateFooterRow();
