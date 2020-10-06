'use strict';

var hoursOfOperation = ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12pm:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:'];

var allStores = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

var seattle = {

  storeName: 'Seattle',

  minimumCustomersPerHour: 23,

  maximumCustomersPerHour: 65,

  averageCookieSalePerCustomer: 6.3,

  totalCookiesForTheDay: 0,

  // a random number between minimum and maximum
  customersPerHour: [],

  //in order to get a cookies sold each hour array, we are going to need to loop over a customers each hour array and multiply that by the average cookies that they buy
  // [23, 40, 55, 46, 54]
  cookiesSoldEachHour: [],

  generateCustomersPerHour: function(){
    // generate the customerEachHour array
    // get a random number somewhere between the min and max and put that random number into the customersPerHour array for each hour
    for(var i = 0; i < hoursOfOperation.length; i++){
      var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);

      this.customersPerHour.push(randomNumber); //put that random number into the customersPerHour array for each hour
    }
  },

  generateCookiesSoldEachHour: function(){
    seattle.generateCustomersPerHour();
    //loop over my customersPerHour array
    //multiply the customersPerHour by the average cookies that they buy
    //put that number in the cookiesSoldEachHour array

    for(var i = 0; i < hoursOfOperation.length; i++){
      var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);

      this.totalCookiesForTheDay += cookiesSoldThisHour;

      this.cookiesSoldEachHour.push(cookiesSoldThisHour);
    }
  },

  render: function(){
    // get the section with the id of seattle from the DOM - that is going to be our parent element for the h2
    var parentSection = document.getElementById('seattle');

    // creat an h2
    var headingSeattle = document.createElement('h2');
    // fill it with content - this.name
    headingSeattle.textContent = this.storeName; //names it Seattle
    // append it to the parent
    parentSection.appendChild(headingSeattle);

    // get the ul with the id of seattle-sales from the DOM - that is going to be our element
    var salesList = document.getElementById('seattle-sales');

    // loop over our cookiesSoldEachHour array
    for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
    //creat an li
      var liElement = document.createElement('li');
      //fill it with content from the cookies sold each hour
      liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
      //append it to the parent
      salesList.appendChild(liElement);
    }
  },
};

seattle.generateCookiesSoldEachHour(); //uses the array of customers to make an array of cookies sold each hour
seattle.render();
console.log(seattle);