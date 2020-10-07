'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

// var allStores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

var allCookieStores = [];

function CookieStoreExpansion(storeName, minimumCustomersPerHour, maximumCustomersPerHour, averageCookieSalePerCustomer, customersPerHour, cookiesSoldEachHour){
  this.storeName = storeName;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookieSalePerCustomer = averageCookieSalePerCustomer;
  this.totalCookiesForTheDay = 0;
  this.customersPerHour= customersPerHour.push()
  this.cookiesSoldEachHour = 

  allCookieStores.push(this);
}




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
    this.totalCookiesForTheDay += cookiesSoldThisHour;
    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
};

var seattle = new CookieStoreExpansion('Seattle', 23, 65, 6.3, seattle.generateCookiesSoldEachHour(), seattle.generateCustomersPerHour(), seattle.generateCookiesSoldEachHour());

// var seattle = new CookieStoreExpansion('Seattle', 23, 65, 6.3);


// CookieStoreExpansion.prototype.render = function(){
//   var parentSection = document.getElementById(`${this.storeName}-sales`);

//   var heading = document.createElement('h2');
//   heading.textContent = this.storeName; //names it Seattle
//   parentSection.appendChild(heading);

//   var salesList = document.getElementById('seattle');

//   for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//     var liElement = document.createElement('li');
//     liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//     salesList.appendChild(liElement);
//   }
// };

// var seattle = {

//   storeName: 'Seattle',

//   minimumCustomersPerHour: 23,

//   maximumCustomersPerHour: 65,

//   averageCookieSalePerCustomer: 6.3,

//   totalCookiesForTheDay: 0,

//   customersPerHour: [],

//   cookiesSoldEachHour: [],

//   generateCustomersPerHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
//       this.customersPerHour.push(randomNumber);
//     }
//   },

//   generateCookiesSoldEachHour: function(){
//     seattle.generateCustomersPerHour();
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
//       this.totalCookiesForTheDay += cookiesSoldThisHour;
//       this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//     }
//   },

//   render: function(){
//     var parentSection = document.getElementById('seattle-sales');

//     var headingSeattle = document.createElement('h2');
//     headingSeattle.textContent = this.storeName; //names it Seattle
//     parentSection.appendChild(headingSeattle);

//     var salesList = document.getElementById('seattle');

//     for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       salesList.appendChild(liElement);
//     }
//   },
// };

// seattle.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
// seattle.render();
// // console.log(seattle.generateCookiesSoldEachHour());


// var tokyo = {

//   storeName: 'Tokyo',

//   minimumCustomersPerHour: 3,

//   maximumCustomersPerHour: 24,

//   averageCookieSalePerCustomer: 1.2,

//   totalCookiesForTheDay: 0,

//   customersPerHour: [],

//   cookiesSoldEachHour: [],

//   generateCustomersPerHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
//       this.customersPerHour.push(randomNumber);
//     }
//   },

//   generateCookiesSoldEachHour: function(){
//     tokyo.generateCustomersPerHour();
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
//       this.totalCookiesForTheDay += cookiesSoldThisHour;
//       this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//     }
//   },

//   render: function(){
//     var parentSection = document.getElementById('tokyo-sales');

//     var headingTokyo = document.createElement('h2');
//     headingTokyo.textContent = this.storeName; //names it tokyo
//     parentSection.appendChild(headingTokyo);

//     var salesList = document.getElementById('tokyo');

//     for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       salesList.appendChild(liElement);
//     }
//   },
// };

// tokyo.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
// tokyo.render();


// var dubai = {

//   storeName: 'Dubai',

//   minimumCustomersPerHour: 11,

//   maximumCustomersPerHour: 38,

//   averageCookieSalePerCustomer: 3.7,

//   totalCookiesForTheDay: 0,

//   customersPerHour: [],

//   cookiesSoldEachHour: [],

//   generateCustomersPerHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
//       this.customersPerHour.push(randomNumber);
//     }
//   },

//   generateCookiesSoldEachHour: function(){
//     dubai.generateCustomersPerHour();
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
//       this.totalCookiesForTheDay += cookiesSoldThisHour;
//       this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//     }
//   },

//   render: function(){
//     var parentSection = document.getElementById('dubai-sales');

//     var headingDubai = document.createElement('h2');
//     headingDubai.textContent = this.storeName; //names it Dubai
//     parentSection.appendChild(headingDubai);

//     var salesList = document.getElementById('dubai');

//     for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       salesList.appendChild(liElement);
//     }
//   },
// };

// dubai.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
// dubai.render();


// var paris = {

//   storeName: 'Paris',

//   minimumCustomersPerHour: 20,

//   maximumCustomersPerHour: 38,

//   averageCookieSalePerCustomer: 2.3,

//   totalCookiesForTheDay: 0,

//   customersPerHour: [],

//   cookiesSoldEachHour: [],

//   generateCustomersPerHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
//       this.customersPerHour.push(randomNumber);
//     }
//   },

//   generateCookiesSoldEachHour: function(){
//     paris.generateCustomersPerHour();
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
//       this.totalCookiesForTheDay += cookiesSoldThisHour;
//       this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//     }
//   },

//   render: function(){
//     var parentSection = document.getElementById('paris-sales');

//     var headingParis = document.createElement('h2');
//     headingParis.textContent = this.storeName; //names it Paris
//     parentSection.appendChild(headingParis);

//     var salesList = document.getElementById('paris');

//     for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       salesList.appendChild(liElement);
//     }
//   },
// };

// paris.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
// paris.render();


// var lima = {

//   storeName: 'Lima',

//   minimumCustomersPerHour: 2,

//   maximumCustomersPerHour: 16,

//   averageCookieSalePerCustomer: 4.6,

//   totalCookiesForTheDay: 0,

//   customersPerHour: [],

//   cookiesSoldEachHour: [],

//   generateCustomersPerHour: function(){
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
//       this.customersPerHour.push(randomNumber);
//     }
//   },

//   generateCookiesSoldEachHour: function(){
//     lima.generateCustomersPerHour();
//     for(var i = 0; i < hoursOfOperation.length; i++){
//       var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
//       this.totalCookiesForTheDay += cookiesSoldThisHour;
//       this.cookiesSoldEachHour.push(cookiesSoldThisHour);
//     }
//   },

//   render: function(){
//     var parentSection = document.getElementById('lima-sales');

//     var headingLima = document.createElement('h2');
//     headingLima.textContent = this.storeName; //names it Lima
//     parentSection.appendChild(headingLima);

//     var salesList = document.getElementById('lima');

//     for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
//       var liElement = document.createElement('li');
//       liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
//       salesList.appendChild(liElement);
//     }
//   },
// };

// lima.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
// lima.render();
