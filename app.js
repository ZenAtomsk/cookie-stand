'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];
var allStores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

var seattle = {

  storeName: 'Seattle',

  minCustPerHour: 23,

  maxCustPerHour: 65,

  averageCookieSale: 6.3,


  // allCookiesHourly: [],

  // generateRandomValue: function(minCustPerHour, maxCustPerHour){
  //   var random = math.floor(math.random() * (maxCustPerHour))
  // },

  generateCustPerHour: function(){

    for (var i = 0; i < hoursOfOperation.length; i++)
      var custPerHour = Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour);
    return custPerHour[i];
    // cookiesPerHour[i] = Math.floor(custPerHour * this.averageCookieSale);
  },

  custPerHour:[this.custPerHour],

  generateCookiesPerHour: function(){

    for (var i = 0; i < hoursOfOperation.length; i++) {

    }
    return this.cookiesPerHour;
  },

  cookiesPerHour:[],
};

// console.log(seattle);
// console.log(seattle.generateCookiesPerHour());

// var tokyo = {

//   storeName: 'Tokyo',

//   minCustPerHour: 3,

//   maxCustPerHour: 24,

//   averageCookieSale: 1.2,

//   generateCustPerHour: function(){

//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

//   },

//   custPerHour:[],

//   generateCookiesPerHour: function(){

//   },

//   cookiesPerHour:[],

// };

// console.log(tokyo.generateCustPerHour());

// var dubai = {

//   storeName: 'Dubai',

//   minCustPerHour: 11,

//   maxCustPerHour: 38,

//   averageCookieSale: 3.7,

//   generateCustPerHour: function(){

//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

//   },

//   custPerHour:[],

//   generateCookiesPerHour: function(){

//   },

//   cookiesPerHour:[],

// };

// console.log(dubai.generateCustPerHour());

// var paris = {

//   storeName: 'Paris',

//   minCustPerHour: 20,

//   maxCustPerHour: 38,

//   averageCookieSale: 2.3,

//   generateCustPerHour: function(){

//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

//   },

//   custPerHour:[],

//   generateCookiesPerHour: function(){

//   },

//   cookiesPerHour:[],

// };

// console.log(paris.generateCustPerHour());

// var lima = {

//   storeName: 'Lima',

//   minCustPerHour: 2,

//   maxCustPerHour: 16,

//   averageCookieSale: 4.6,

//   generateCustPerHour: function(){

//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

//   },

//   custPerHour:[],

//   generateCookiesPerHour: function(){

//   },

//   cookiesPerHour:[],

// };

// console.log(lima.generateCustPerHour());

