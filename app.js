'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

function multiply(a, b){
  return a * b;

}

var seattle = {

  minCustPerHour: 23,

  maxCustPerHour: 65,

  averageCookieSale: 6.3,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

    multiply(this.custPerHour, this.averageCookieSale);
    console.log(multiply);

  },

  cookiesPerHour:[],

};

console.log(seattle.generateCustPerHour());

var tokyo = {

  minCustPerHour: 3,

  maxCustPerHour: 24,

  averageCookieSale: 1.2,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(tokyo.generateCustPerHour());

var dubai = {

  minCustPerHour: 11,

  maxCustPerHour: 38,

  averageCookieSale: 3.7,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(dubai.generateCustPerHour());

var paris = {

  minCustPerHour: 20,

  maxCustPerHour: 38,

  averageCookieSale: 2.3,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(paris.generateCustPerHour());

var lima = {

  minCustPerHour: 2,

  maxCustPerHour: 16,

  averageCookieSale: 4.6,

  generateCustPerHour: function(){

    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour) + this.minCustPerHour);

  },

  custPerHour:[],

  generateCookiesPerHour: function(){

  },

  cookiesPerHour:[],

};

console.log(lima.generateCustPerHour());

