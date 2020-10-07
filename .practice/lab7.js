var allCookieStores = [];

  function CookieStoreExpansion(storeName, minimumCustomersPerHour,maximumCustomersPerHour, averageCookieSalePerCustomer, totalCookiesForTheDay, customersPerHour, cookiesSoldEachHour){
  this.storeName = storeName;
  this.minimumCustomersPerHour = minimumCustomersPerHour;
  this.maximumCustomersPerHour = maximumCustomersPerHour;
  this.averageCookieSalePerCustomer  =  averageCookieSalePerCustomer;
  this.totalCookiesForTheDay  =  totalCookiesForTheDay;
  this.customersPerHour  =  customersPerHour;
  this.cookiesSoldEachHour  =  cookiesSoldEachHour;

  allCookieStores.push(this);
}

var seattle = new CookieStoreExpansion('Seattle', 23, 65, 6.3, seattle.generateCookiesSoldEachHour(this.totalCookiesForTheDay), seattle.generateCustomersPerHour(), generateCookiesSoldEachHour());



CookieStoreExpansion.prototype.generateCustomersPerHour = function(){
  for(var i = 0; i < hoursOfOperation.length; i++){
    var randomNumber = Math.floor(Math.random() * (this.maximumCustomersPerHour - this.minimumCustomersPerHour + 1) + this.minimumCustomersPerHour);
    this.customersPerHour.push(randomNumber);
  }
}

CookieStoreExpansion.prototype.generateCookiesSoldEachHour = function(){
  seattle.generateCustomersPerHour();
  for(var i = 0; i < hoursOfOperation.length; i++){
    var cookiesSoldThisHour = Math.floor(this.customersPerHour[i] * this.averageCookieSalePerCustomer);
    this.totalCookiesForTheDay += cookiesSoldThisHour;
    this.cookiesSoldEachHour.push(cookiesSoldThisHour);
  }
}

CookieStoreExpansion.prototype.render = function(){
  var parentSection = document.getElementById('seattle-sales');

  var headingSeattle = document.createElement('h2');
  headingSeattle.textContent = this.storeName; //names it Seattle
  parentSection.appendChild(headingSeattle);

  var salesList = document.getElementById('seattle');

  for(var i = 0; i < this.cookiesSoldEachHour.length; i++){
    var liElement = document.createElement('li');
    liElement.textContent = `${hoursOfOperation[i]}: ${this.cookiesSoldEachHour[i]} cookies`;
    salesList.appendChild(liElement);
  }
}